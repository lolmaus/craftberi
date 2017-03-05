import Route from 'ember-route'
import service from 'ember-service/inject'



export default Route.extend({

  prismic: service(),

  model () {
    const prismic = this.get('prismic')

    return prismic.findAllDocuments()
  }
})
