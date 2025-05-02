-- backend/schema.sql

-- Tabela para configurações do agente por ambiente
CREATE TABLE IF NOT EXISTS agent_configurations (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    environment text NOT NULL CHECK (environment IN ('playground', 'production')),
    system_prompt text,
    llm_model text,
    buffer_timeout integer,
    allowed_numbers text[],
    blocked_numbers text[],
    rag_google_drive_folder_id text,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now(),
    CONSTRAINT unique_environment UNIQUE (environment)
);

-- Tabela para contatos (CRM)
CREATE TABLE IF NOT EXISTS contacts (
    id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
    phone_number text UNIQUE NOT NULL,
    name text,
    tags text[],
    last_interaction_at timestamptz,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Tabela para controle de indexação RAG
CREATE TABLE IF NOT EXISTS rag_control (
    id bigserial PRIMARY KEY,
    file_name text NOT NULL,
    file_id_gdrive text UNIQUE NOT NULL,
    status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'indexing', 'indexed', 'error')),
    error_message text,
    last_indexed_at timestamptz,
    created_at timestamptz DEFAULT now(),
    updated_at timestamptz DEFAULT now()
);

-- Índices adicionais
CREATE INDEX IF NOT EXISTS idx_rag_control_file_id_gdrive ON rag_control(file_id_gdrive);
CREATE INDEX IF NOT EXISTS idx_contacts_phone_number ON contacts(phone_number);

-- Função para atualizar 'updated_at' automaticamente (opcional, mas recomendado)
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Triggers para atualizar 'updated_at'
DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'set_timestamp_agent_configurations') THEN
        CREATE TRIGGER set_timestamp_agent_configurations
        BEFORE UPDATE ON agent_configurations
        FOR EACH ROW
        EXECUTE PROCEDURE trigger_set_timestamp();
    END IF;
END $$;

DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'set_timestamp_contacts') THEN
        CREATE TRIGGER set_timestamp_contacts
        BEFORE UPDATE ON contacts
        FOR EACH ROW
        EXECUTE PROCEDURE trigger_set_timestamp();
    END IF;
END $$;

DO $$ BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_trigger WHERE tgname = 'set_timestamp_rag_control') THEN
        CREATE TRIGGER set_timestamp_rag_control
        BEFORE UPDATE ON rag_control
        FOR EACH ROW
        EXECUTE PROCEDURE trigger_set_timestamp();
    END IF;
END $$;
