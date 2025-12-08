import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.VITE_SUPABASE_URL': JSON.stringify('https://pqalanvbnnbdcqtlztmg.supabase.co'),
    'process.env.VITE_SUPABASE_KEY': JSON.stringify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxYWxhbnZibm5iZGNxdGx6dG1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTczMTA3OTksImV4cCI6MjA3Mjg4Njc5OX0.4Yq1o0dN08qDB1xR9hLRzQDEV7lREUqP4YZDLUo1bhg'),
  }
})

