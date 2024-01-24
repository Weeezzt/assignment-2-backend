import app from '../scripts/app.js'
import request from 'supertest' 

const movies = [
    { id: 1, title: 'Isle of dogs' },
    { id: 2, title: 'Encanto' },
    { id: 3, title: 'The Shawshank Redemption' },
    { id: 4, title: 'Min granne Totoro' },
    { id: 5, title: 'The Muppets' },
    { id: 6, title: 'Forrest Gump' },
    { id: 8, title: 'Pulp Fiction' },
]

describe('correct title for movie', () => {
    movies.forEach(movie => {
        it(`Should show ${movie.title}'s title`, async ( )=> {
            const response = await request(app).get(`/movie/${movie.id}`)
            .expect('Content-Type', 'text/html; charset=utf-8')
            .expect(200);
      
            expect(response.text).toMatch(movie.title);
        })
    });
  });
