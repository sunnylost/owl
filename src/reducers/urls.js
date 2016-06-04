import actionTypes from '../util/actionTypes'
import Const from '../util/const'

const NULL         = null,
      filterTypes  = Const.filter.map( item => item.value ),
      initialState = {
          filter: {
              type  : filterTypes[ 0 ],
              search: NULL
          },
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
    let all     = state.all,
        current = state.current,
        url, selected

    switch ( action.type ) {
        case actionTypes.URL_ADD:
            var { type } = action.url,
                newState = [ ...state[ type ], action.url ],
                filter   = state.filter,
                list

            all.push( action.url )
            list = [ ...state[ state.filter.type ] ]

            if ( filter.search ) {
                list = list.filter( url => url.url.match( filter.search ) )
            }

            return Object.assign( {}, state, {
                all     : [ ...all ],
                [ type ]: newState,
                current : list
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

        case actionTypes.URL_FILTER:
            var { type = state.filter.type, search = state.filter.search } = action.filter,
                list = [ ...state[ type ] ]

            if ( search ) {
                search = new RegExp( search )
                list   = list.filter( url => url.url.match( search ) )
            }

            return Object.assign( {}, state, {
                current: list,
                filter : {
                    type,
                    search
                }
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
