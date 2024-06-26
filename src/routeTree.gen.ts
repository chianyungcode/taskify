/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TaskTaskIdImport } from './routes/task.$taskId'

// Create Virtual Routes

const AskLazyImport = createFileRoute('/ask')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const AskLazyRoute = AskLazyImport.update({
  path: '/ask',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/ask.lazy').then((d) => d.Route))

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const TaskTaskIdRoute = TaskTaskIdImport.update({
  path: '/task/$taskId',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/ask': {
      id: '/ask'
      path: '/ask'
      fullPath: '/ask'
      preLoaderRoute: typeof AskLazyImport
      parentRoute: typeof rootRoute
    }
    '/task/$taskId': {
      id: '/task/$taskId'
      path: '/task/$taskId'
      fullPath: '/task/$taskId'
      preLoaderRoute: typeof TaskTaskIdImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  AboutLazyRoute,
  AskLazyRoute,
  TaskTaskIdRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/ask",
        "/task/$taskId"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/ask": {
      "filePath": "ask.lazy.tsx"
    },
    "/task/$taskId": {
      "filePath": "task.$taskId.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
