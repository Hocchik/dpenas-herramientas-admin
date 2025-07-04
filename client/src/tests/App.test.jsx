import { describe, it, expect, vi } from 'vitest'
import { render } from '@testing-library/react'
import App from '../App'
import { MemoryRouter } from 'react-router-dom'

// Mock de ChartjsConfig (si no exporta nada que se use directamente)
vi.mock('../charts/ChartjsConfig', () => ({}))

describe('App component', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )
    expect(true).toBeTruthy()
  })
})


/* // tests/LoginFlow.test.jsx

import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import App from '../App'

// Simula que está logueado el admin
import { AuthContextAdmin } from '../context/AuthContextAdmin'

describe('Login flow and access to /admin', () => {
  it('permite navegar a /admin si el usuario está autenticado', () => {
    render(
      <AuthContextAdmin.Provider value={{ authAdmin: { id: 'admin123' } }}>
        <MemoryRouter initialEntries={['/admin']}>
          <App />
        </MemoryRouter>
      </AuthContextAdmin.Provider>
    )

    expect(screen.getByText(/admin/i)).toBeTruthy() // Ajusta este texto según el contenido de tu dashboard
  })
}) */

  /* describe('Access to /admin without login', () => {
  it('bloquea la ruta si no hay sesión activa', () => {
    render(
      <AuthContextAdmin.Provider value={{ authAdmin: null }}>
        <MemoryRouter initialEntries={['/admin']}>
          <App />
        </MemoryRouter>
      </AuthContextAdmin.Provider>
    )

    // Podría renderizar una redirección al login o un componente de "acceso denegado"
    expect(screen.getByText(/login/i)).toBeTruthy() // Ajusta esto si usas otro mensaje o diseño
  })
}) */