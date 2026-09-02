/* eslint-disable import/no-dynamic-require, global-require */
const mockRequireListCarPage = () => {
  jest.mock('../../pattern/page/ListCarPage', () => 'ListCarPage')
  return require('../../pattern/page/ListCarPage')
}

const mockRequireNotFoundPage = () => {
  jest.mock('../../pattern/page/NotFoundPage', () => 'NotFoundPage')
  return require('../../pattern/page/NotFoundPage')
}

const mockRequirePath = () => {
  jest.mock('../path', () => ({
    appRootPath: 'fantastic-app-root-path',
    listCarPagePath: 'fantastic-list-car-page-path',
  }))
  return require('../path')
}

describe('index', () => {
  const path = mockRequirePath()

  const requireIndex = () => require('../index')

  describe('appRootRoute', () => {
    const expectedAppRootRoute = {
      path: path.appRootPath,
    }

    test('must return app root route object', () => {
      const { appRootRoute } = requireIndex()
      expect(appRootRoute).toEqual(expectedAppRootRoute)
    })
  })

  describe('listCarPageRoute', () => {
    const listCarPage = mockRequireListCarPage()

    const expectedListCarPageRoute = {
      path: path.listCarPagePath,
      clientComponent: listCarPage.AsyncListCarPage,
      serverComponent: listCarPage.ListCarPage,
    }

    test('must return list car page route object', () => {
      const { listCarPageRoute } = requireIndex()
      expect(listCarPageRoute).toEqual(expectedListCarPageRoute)
    })
  })

  describe('notFoundPageRoute', () => {
    const notFoundPage = mockRequireNotFoundPage()

    const expectedNotFoundPageRoute = {
      clientComponent: notFoundPage.AsyncNotFoundPage,
      serverComponent: notFoundPage.NotFoundPage,
    }

    test('must return not found page route object', () => {
      const { notFoundPageRoute } = requireIndex()
      expect(notFoundPageRoute).toEqual(expectedNotFoundPageRoute)
    })
  })
})
/* eslint-enable import/no-dynamic-require, global-require */
