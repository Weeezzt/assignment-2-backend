import request from 'supertest'
import app from '../scripts/app.js'

describe('404 page test', () => {
    it('should render the 404 page when invalid movie id', async () => {
        const response = await request(app).get('/movie/0')
        
        expect(response.status).toBe(404)
        expect(response.text).toContain('class="error-page"');
    })
})
