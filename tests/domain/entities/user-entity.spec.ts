import { User } from "@/domain/entities/user-entity"

describe('User entity', () => {
  it('should create an user correctly', () => {
   const sut = new User({ name: 'Gustavo Alves', picture: 'https://avatars.githubusercontent.com/'})

   expect(sut.name).toBe('Gustavo Alves')
   expect(sut.picture).toBe('https://avatars.githubusercontent.com/')
  })
})
