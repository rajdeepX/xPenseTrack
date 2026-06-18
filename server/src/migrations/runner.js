import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import pool from '../config/db.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

async function runMigrations() {
  try {
    console.log('🔄 Starting migrations...')

    // Get all .sql files in order
    const migrationFiles = fs
      .readdirSync(__dirname)
      .filter(file => file.endsWith('.sql'))
      .sort()

    for (const file of migrationFiles) {
      const filePath = path.join(__dirname, file)
      const sql = fs.readFileSync(filePath, 'utf8')

      console.log(`⏳ Running ${file}...`)
      await pool.query(sql)
      console.log(`✅ ${file} completed`)
    }

    console.log('✅ All migrations completed successfully')
    process.exit(0)
  } catch (err) {
    console.error('❌ Migration failed:', err.message)
    process.exit(1)
  }
}

runMigrations()
