const { createClient } = require('@supabase/supabase-js');

const SUPABASE_URL = 'https://ezukjnwuurdrpmmwgtyi.supabase.co/'; // Reemplaza con tu URL
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6dWtqbnd1dXJkcnBtbXdndHlpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDEyNzMwNDAsImV4cCI6MjAxNjg0OTA0MH0.keloRSLNim7WIuJGwjHj4Pr4YBzrC0bc4h6XJzTQ4l8'; // Reemplaza con tu clave pública

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

module.exports = supabase;