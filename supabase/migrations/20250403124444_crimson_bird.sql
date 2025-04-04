/*
  # Create payments tracking system

  1. New Tables
    - `payments`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `property_id` (integer)
      - `amount` (decimal)
      - `status` (text)
      - `bank_name` (text)
      - `created_at` (timestamp)
      - `confirmed_at` (timestamp)
      
  2. Security
    - Enable RLS on `payments` table
    - Add policies for users to read their own payments
    - Add policies for admin to manage all payments
*/

CREATE TABLE IF NOT EXISTS payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  property_id integer NOT NULL,
  amount decimal NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  bank_name text NOT NULL,
  created_at timestamptz DEFAULT now(),
  confirmed_at timestamptz
);

ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Allow users to read their own payments
CREATE POLICY "Users can view their own payments"
  ON payments
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- Allow users to create payments
CREATE POLICY "Users can create payments"
  ON payments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Allow admin to view all payments
CREATE POLICY "Admin can view all payments"
  ON payments
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.email = 'admin@example.com'
    )
  );