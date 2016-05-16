import actionTypes from '../util/actionTypes'

const filterTypes  = [ 'all', 'xhr', 'js', 'css', 'img', 'other' ],
      initialState = {
          filter: filterTypes[ 0 ],
          filterTypes
      }

filterTypes.forEach( filter => {
    initialState[ filter ] = []
} )

initialState.current = initialState.all

const urls = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.URL_ADD:
            return Object.assign( {}, state, {
                current: [ ...state.current, action.url ]
            } )
    }

    return state
}

export default urls
