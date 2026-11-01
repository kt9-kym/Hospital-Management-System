CREATE TABLE IF NOT EXISTS users (
    id uuid PRIMARY KEY,
    email text NOT NULL UNIQUE,
    full_name text NOT NULL,
    password_hash text NOT NULL,
    role text NOT NULL DEFAULT 'patient' CHECK (role IN ('patient', 'admin')),
    created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS service_requests (
    id uuid PRIMARY KEY,
    user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    type text NOT NULL CHECK (type IN ('Appointment', 'Ambulance')),
    details jsonb NOT NULL,
    status text NOT NULL DEFAULT 'Pending'
        CHECK (status IN ('Pending', 'Approved', 'In progress', 'Completed', 'Rejected')),
    created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS service_requests_user_created_idx
    ON service_requests (user_id, created_at DESC);

CREATE TABLE IF NOT EXISTS medical_records (
    id uuid PRIMARY KEY,
    user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    category text NOT NULL,
    title text NOT NULL,
    description text NOT NULL DEFAULT '',
    recorded_on date,
    created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS medical_records_user_created_idx
    ON medical_records (user_id, created_at DESC);

CREATE TABLE IF NOT EXISTS demo_payments (
    id uuid PRIMARY KEY,
    user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    amount_cents integer NOT NULL CHECK (amount_cents > 0),
    currency text NOT NULL DEFAULT 'ETB',
    payment_method text NOT NULL DEFAULT 'demo',
    reference text NOT NULL UNIQUE,
    status text NOT NULL DEFAULT 'simulated' CHECK (status = 'simulated'),
    created_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS demo_payments_user_created_idx
    ON demo_payments (user_id, created_at DESC);
