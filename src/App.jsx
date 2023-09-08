// import './App.css'
// import { useEffect } from 'react'
// import { Container, Grid } from '@mui/material'
// import SearchBar from './components/SearchBar'
// import CardList from './components/CardList'
// import List from './components/List'
// import { getPokemons } from './api/getPokemons'
// import { setPokemons } from './actions'
// import { connect } from 'react-redux'

// function App({ pokemons, setPokemons }) {

//   useEffect(() => {
//     const fetchPokemons = async () => {
//       const resp = await getPokemons()
//       setPokemons(resp)
//       console.log(resp)
//     }

//     fetchPokemons();
//   }, [])

//   return (
//     <>
//       <Grid container justifyContent="center">
//         <SearchBar />
//       </Grid>
//       <Container>
//         <List 
//           data={pokemons}
//           renderFn={ (card) => <CardList key={crypto.randomUUID()} {...card}/>}
//         />
//       </Container>
//     </>
//   )
// }

// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons
// })
// const mapDispatchToProps = (dispatch) => ({
//   setPokemons: (value) => dispatch(setPokemons(value))
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App)

import './App.css'
import { useEffect } from 'react'
import {Container, Grid } from '@mui/material'
import SearchBar from './components/SearchBar'
import CardList from './components/CardList'
import List from './components/List'
import { getPokemons } from './api/getPokemons'
import { getPokemonsDetailed } from './actions'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

function App() {

  const loading = useSelector((state) => state.ui.loading)
  const pokemons = useSelector((state) => state.pokemons.pokemons, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchPokemons = async () => {
      const resp = await getPokemons()
      dispatch(getPokemonsDetailed(resp))
    }

    fetchPokemons();
  }, [])

  return (
    <>
      <Grid container justifyContent="center">
        <SearchBar />
      </Grid>
      <Container>
        <List 
          data={pokemons}
          renderFn={ (pokemon) => <CardList key={pokemon.id} {...pokemon}/>}
          loading={loading}
        />
      </Container>
    </>
  )
}

export default App
