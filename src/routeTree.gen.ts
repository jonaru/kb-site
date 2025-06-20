/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

import { Route as rootRouteImport } from './routes/__root'

const ProductLazyRouteImport = createFileRoute('/product')()
const IndexLazyRouteImport = createFileRoute('/')()

const ProductLazyRoute = ProductLazyRouteImport.update({
  id: '/product',
  path: '/product',
  getParentRoute: () => rootRouteImport,
} as any).lazy(() => import('./routes/product.lazy').then((d) => d.Route))
const IndexLazyRoute = IndexLazyRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/product': typeof ProductLazyRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/product': typeof ProductLazyRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexLazyRoute
  '/product': typeof ProductLazyRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/product'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/product'
  id: '__root__' | '/' | '/product'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  ProductLazyRoute: typeof ProductLazyRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/product': {
      id: '/product'
      path: '/product'
      fullPath: '/product'
      preLoaderRoute: typeof ProductLazyRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  ProductLazyRoute: ProductLazyRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
