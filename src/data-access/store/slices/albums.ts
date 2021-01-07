import { createSlice, createAction } from '@reduxjs/toolkit'

// interface CurrentDisplay {
//   displayType: 'issues' | 'comments'
//   issueId: number | null
// }

// interface CurrentDisplayPayload {
//   displayType: 'issues' | 'comments'
//   issueId?: number
// }

// interface CurrentRepo {
//   org: string
//   repo: string
// }

// type CurrentDisplayState = {
//   page: number
// } & CurrentDisplay &
//   CurrentRepo

// const initialState = {
//   org: 'rails',
//   repo: 'rails',
//   page: 1,
//   displayType: 'issues',
//   issueId: null,
// } as CurrentDisplayState

// const issuesDisplaySlice = createSlice({
//   name: 'issuesDisplay',
//   initialState,
//   reducers: {
//     displayRepo(state, action: PayloadAction<CurrentRepo>) {
//       const { org, repo } = action.payload
//       state.org = org
//       state.repo = repo
//     },
//     setCurrentPage(state, action: PayloadAction<number>) {
//       state.page = action.payload
//     },
//     setCurrentDisplayType(state, action: PayloadAction<CurrentDisplayPayload>) {
//       const { displayType, issueId = null } = action.payload
//       state.displayType = displayType
//       state.issueId = issueId
//     },
//   },
// })

// export const { displayRepo, setCurrentDisplayType, setCurrentPage } = issuesDisplaySlice.actions

// export const ALBUMS_FEATURE_KEY = 'orders'

// enum LOADING_STATUS {
//   notLoaded = 'NOT_LOADED',
//   error = 'ERROR',
//   loading = 'LOADING',
//   loaded = 'LOADED',
// }

// const initialState = {
//   loadingStatus: LOADING_STATUS.notLoaded,
//   errorMessage: null,
// }

// const albumsSlice = createSlice({
//   name: ALBUMS_FEATURE_KEY,
//   initialState,
//   reducers: {},
// })

// export default albumsSlice.reducer

export const ALBUMS_FEATURE_KEY = 'orders'

export const getAlbums = createAction(`${ALBUMS_FEATURE_KEY}/getMusicAlbumsStatus`)

const initialState = {}

const albumsSlice = createSlice({
  name: ALBUMS_FEATURE_KEY,
  initialState,
  reducers: {
    getAlbumsDone: (state, action) => {
      console.log('action', action)
    },
  },
})

export const { getAlbumsDone } = albumsSlice.actions

export default albumsSlice

// import {
//   Dispatch,
//   EntityState,
//   PayloadAction,
//   createAsyncThunk,
//   createEntityAdapter,
//   createSelector,
//   createSlice,
// } from '@reduxjs/toolkit'

// import { LoadingStatus, ORDER_STATUS, PAYMENT_STATUS } from '@ecomm-b2b-web/shop-admin/constants'
// import { Nullable } from '@ecomm-b2b-web/shared/utility-types'

// import { CurrentOrderEntity, GetOrdersResponse, OrderEntity } from './types'
// import * as ordersAPI from './api'

// export const ORDERS_FEATURE_KEY = 'orders'

// export interface OrdersState extends EntityState<OrderEntity> {
//   loadingStatus: LoadingStatus
//   errorMessage: Nullable<string>
//   totalCount: number
//   searchStr: Nullable<string>
//   currentOrder: Nullable<CurrentOrderEntity>
//   unreadedOrdersCount: number
//   rawOrdersList: OrderEntity[]
// }

// export const ordersAdapter = createEntityAdapter<OrderEntity>()

// export const fetchOrders = createAsyncThunk('orders/fetchStatus', ordersAPI.getOrders)
// export const fetchUnreadCountOrders = createAsyncThunk(
//   'orders/fetchUnreadStatus',
//   ordersAPI.getUnreadCountOrders,
// )
// export const fetchOrder = createAsyncThunk('order/fetchStatus', ordersAPI.getOrder)
// export const updateOrder = createAsyncThunk('order/updateStatus', ordersAPI.updateOrder)
// export const createOrder = createAsyncThunk('order/createStatus', ordersAPI.createOrder)
// export const markAsReadOrder = createAsyncThunk(
//   'order/markAsReadOrderStatus',
//   ordersAPI.markAsReadOrder,
// )

// export const initialOrdersState: OrdersState = ordersAdapter.getInitialState({
//   loadingStatus: LoadingStatus.NOT_LOADED,
//   errorMessage: null,
//   totalCount: 0,
//   searchStr: null,
//   currentOrder: null,
//   unreadedOrdersCount: 0,
//   rawOrdersList: [],
// })

// export const ordersSlice = createSlice({
//   name: ORDERS_FEATURE_KEY,
//   initialState: initialOrdersState,
//   reducers: {
//     incrementUnreadCount: state => {
//       state.unreadedOrdersCount = state.unreadedOrdersCount + 1
//     },
//     resetUnreadCounter: state => {
//       state.unreadedOrdersCount = 0
//     },
//     addOne: (state, action) => {
//       ordersAdapter.addOne(state, action)
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchOrders.pending, (state: OrdersState) => {
//         state.loadingStatus = LoadingStatus.LOADING
//       })
//       .addCase(
//         fetchOrders.fulfilled,
//         (state: OrdersState, action: PayloadAction<GetOrdersResponse>) => {
//           ordersAdapter.setAll(state, action.payload.items)
//           state.rawOrdersList = action.payload.items

//           state.loadingStatus = LoadingStatus.LOADED
//           state.totalCount = action.payload.totalCount
//         },
//       )
//       .addCase(fetchOrders.rejected, (state: OrdersState, action) => {
//         state.loadingStatus = LoadingStatus.ERROR
//         state.errorMessage = new Error(action.error.message).message
//       })
//       .addCase(
//         fetchOrder.fulfilled,
//         (state: OrdersState, action: PayloadAction<CurrentOrderEntity>) => {
//           state.currentOrder = action.payload
//         },
//       )
//       .addCase(
//         updateOrder.fulfilled,
//         (state: OrdersState, action: PayloadAction<CurrentOrderEntity>) => {
//           state.currentOrder = action.payload
//         },
//       )
//       .addCase(
//         fetchUnreadCountOrders.fulfilled,
//         (state: OrdersState, action: PayloadAction<number>) => {
//           state.unreadedOrdersCount = action.payload
//         },
//       )
//   },
// })

// const selectOrdersSlice = (state: {
//   [ORDERS_FEATURE_KEY]: OrdersState & EntityState<OrderEntity>
// }) => state[ORDERS_FEATURE_KEY]

// export const dispatchUpdateCounterAfterAddNotification = (dispatch: Dispatch<any>) => {
//   dispatch(ordersSlice.actions.incrementUnreadCount())
// }

// export const dispatchAddOrderAfterAddNotification = (
//   dispatch: Dispatch<any>,
//   data: OrderEntity,
// ) => {
//   dispatch(ordersSlice.actions.addOne(data))
// }

// const selectors = ordersAdapter.getSelectors(selectOrdersSlice)

// export const ordersSelectors = {
//   ...selectors,
//   selectLoading: createSelector(
//     selectOrdersSlice,
//     slice => slice.loadingStatus === LoadingStatus.LOADING,
//   ),
//   selectLoaded: createSelector(
//     selectOrdersSlice,
//     slice => slice.loadingStatus === LoadingStatus.LOADED,
//   ),
//   selectCurrentOrder: createSelector(selectOrdersSlice, slice => slice.currentOrder),
//   selectUnreadedOrdersCount: createSelector(selectOrdersSlice, slice => slice.unreadedOrdersCount),
//   selectAllBesidesCancelledOrders: createSelector(selectOrdersSlice, slice =>
//     slice.rawOrdersList.filter(order => order.fulfillmentStatus !== ORDER_STATUS.CANCELLED),
//   ),
//   selectNewOrders: createSelector(selectOrdersSlice, slice =>
//     slice.rawOrdersList.filter(order => order.fulfillmentStatus === ORDER_STATUS.NEW),
//   ),
//   selectNotPaidOrders: createSelector(selectOrdersSlice, slice =>
//     slice.rawOrdersList.filter(
//       order =>
//         order.financialStatus === PAYMENT_STATUS.NOT_PAID &&
//         order.fulfillmentStatus !== ORDER_STATUS.CANCELLED,
//     ),
//   ),
//   selectCancelledOrders: createSelector(selectOrdersSlice, slice =>
//     slice.rawOrdersList.filter(order => order.fulfillmentStatus === ORDER_STATUS.CANCELLED),
//   ),
// }
