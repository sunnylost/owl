import actionTypes from '../util/actionTypes'

const filterTypes  = [ 'all', 'xhr', 'js', 'css', 'img', 'other' ],
      initialState = {
          filter: filterTypes[ 0 ],
          filterTypes
      },

      clear        = ( state ) => {
          filterTypes.forEach( filter => {
              state[ filter ] = []
          } )

          state.current = state.all

          return state
      }

clear( initialState )

const urls = ( state = initialState, action ) => {
    let current = state.current,
        url, selected

    switch ( action.type ) {
        case actionTypes.URL_ADD:
            return Object.assign( {}, state, {
                current: [ ...current, action.url ]
            } )

        case actionTypes.SCREEN_CLEAR:
            return Object.assign( {}, state, clear( state ) )

        case actionTypes.URL_DETAIL:
            selected = state.selected

            if ( selected ) {
                if ( selected.id === action.id ) {
                    break
                }

                selected.isActive = false
            }

            url = current.filter( url => url.id === action.id )[ 0 ]

            url.isActive = true
            return Object.assign( {}, state, {
                current : [ ...current ],
                selected: url
            } )

        case actionTypes.URL_HIDE_DETAIL:
            url = current.filter( url => url.id === action.id )[ 0 ]

            url.isActive = false

            return Object.assign( {}, state, {
                current : [ ...current ],
                selected: null
            } )
    }

    return state
}

export default urls
