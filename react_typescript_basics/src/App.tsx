import { Greet } from './components/props/Greet'
import { Person } from './components/props/Person'
import { PersonList } from './components/props/PersonList'
import { Status } from './components/props/Status'
import { Heading } from './components/props/Heading'
import { Oscar } from './components/props/Oscar'
import { Button } from './components/props/Button'
import { Input } from './components/props/Input'
import { Container } from './components/props/Container'
import { ThemeContextProvider } from './components/context/ThemeContext'
import { Box } from './components/context/Box'
import { UserContextProvider } from './components/context/UserContext'
import { User } from './components/context/User'
import { DomRef } from './components/refs/DomRef'
import { MutableRef } from './components/refs/MutableRef'
import './App.css'
import { Counter } from './components/class/Counter'
import { List } from './components/generics/List'
import { Toast } from './components/templateliterals/Toast'
import { CustomButton } from './components/html/Button'
import { RandomNumber } from './components/restriction/RandomNumber'
import { Text } from './components/polymorphic/Text'

function App() {
  const personName = {
    first: 'Kunal',
    last: 'Shah'
  }

  const nameList = [
    {
      first: 'Rohan',
      last: 'Kumar'
    },
    {
      first: 'Raunak',
      last: 'Kumar'
    },
    {
      first: 'Suraj',
      last: 'Kumar'
    }
  ]

  return (
    <div className='App'>
      <Greet name='Vishwas' isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Dicaprio</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id)
        }}
      />
      <Input value='' handleChange={event => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef />
      <MutableRef />
      <Counter message='The count value is ' />
      {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={item => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
      <List
        items={[
          {
            id: 1,
            first: 'Rohan',
            last: 'Kumar'
          },
          {
            id: 2,
            first: 'Raunak',
            last: 'Kumar'
          },
          {
            id: 3,
            first: 'Suraj',
            last: 'Kumar'
          }
        ]}
        onClick={item => console.log(item)}
      />
      <Toast position='center' />
      <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Button Label
      </CustomButton>
      <RandomNumber value={10} isPositive />
      <Text size='lg' as='h1'>
        Heading
      </Text>
      <Text size='md' as='p'>
        Paragraph
      </Text>
      <Text size='sm' color='secondary' as='label' htmlFor='someId'>
        Label
      </Text>
    </div>
  )
}

export default App