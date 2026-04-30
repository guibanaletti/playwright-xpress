import { test, expect } from '@playwright/test'
import { faker } from '@faker-js/faker'

test('deve poder cadastrar uma nova tarefa', async ({ page, request }) => {
    await request.delete('http://localhost:3333/helper/tasks/Ler um livro de TypeScript')

    await page.goto('http://localhost:8080')

    const inputTaskName = page.locator('input[class*=InputNewTask]')
    await inputTaskName.fill('Ler um livro de TypeScript')
    await page.click('css=button >> text=Create')

})
