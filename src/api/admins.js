// src/api/admins.js
import { supabaseAdmin } from "@/lib/client/supabaseAdmin";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, name, ssn, dob, address, phone, role } = req.body;

    try {
      // Step 1: Create the user in Supabase Auth
      const { data: user, error: authError } = await supabaseAdmin.auth.admin.createUser({
        email,
        password,
        user_metadata: { name },
        email_confirm: true, // Send confirmation email
      });

      if (authError) {
        console.error('Auth error:', authError.message);
        return res.status(400).json({ error: 'Error creating user in Auth', details: authError.message });
      }

      // Step 2: Add user to the 'admins' table
      const adminData = {
        admin_id: user.id, // Use user ID from Supabase Auth
        name,
        ssn,
        dob,
        address,
        email,
        phone,
        role,
      };

      const { error: dbError } = await supabaseAdmin.from('admins').insert(adminData);

      if (dbError) {
        console.error('Database error:', dbError.message);
        return res.status(400).json({ error: 'Error inserting admin into database', details: dbError.message });
      }

      res.status(200).json({ message: 'Admin created successfully', user });
    } catch (error) {
      console.error('Unexpected error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
