module.exports = {
  '_design/all': {
    filters: {
      docs: function (doc, req) {
        if (doc.type) {
          return true
        } else {
          return false
        }
      }
    },
    views: {
      by_title: {
        map: function (doc) {
          if (doc.type && !doc.trash) {
            emit(doc.title, null)
          }
        }
      },
      by_created_at: {
        map: function (doc) {
          if (doc.type && !doc.trash) {
            emit([Date.parse(doc.created_at)], null)
          }
        }
      },
      by_updated_at: {
        map: function (doc) {
          if (doc.type && !doc.trash) {
            emit([Date.parse(doc.updated_at)], null)
          }
        }
      },
      by_size: {
        map: function (doc) {
          if (doc.type && !doc.trash) {
            emit(doc.length, null)
          }
        }
      },
      by_tag: {
        map: function (doc) {
          if (doc.type && !doc.trash) {
            for (var i in doc.tags) {
              emit([doc.tags[i]], null)
            }
          }
        }
      }
    }
  },

  '_design/notes': {
    views: {
      by_title: {
        map: function (doc) {
          if (doc.type == 'note' && !doc.trash) {
            emit(doc.title, null)
          }
        }
      },
      by_created_at: {
        map: function (doc) {
          if (doc.type == 'note' && !doc.trash) {
            emit(Date.parse(doc.created_at), null)
          }
        }
      },
      by_updated_at: {
        map: function (doc) {
          if (doc.type == 'note' && !doc.trash) {
            emit(Date.parse(doc.updated_at), null)
          }
        }
      },
      by_size: {
        map: function (doc) {
          if (doc.type == 'note' && !doc.trash) {
            emit(doc.length, null)
          }
        }
      }
    }
  },

  '_design/presentations': {
    views: {
      by_title: {
        map: function (doc) {
          if (doc.type == 'presentation' && !doc.trash) {
            emit(doc.title, null)
          }
        }
      },
      by_created_at: {
        map: function (doc) {
          if (doc.type == 'presentation' && !doc.trash) {
            emit(Date.parse(doc.created_at), null)
          }
        }
      },
      by_updated_at: {
        map: function (doc) {
          if (doc.type == 'presentation' && !doc.trash) {
            emit(Date.parse(doc.updated_at), null)
          }
        }
      },
      by_size: {
        map: function (doc) {
          if (doc.type == 'presentation' && !doc.trash) {
            emit(doc.length, null)
          }
        }
      }
    }
  },

  '_design/tasks': {
    views: {
      by_title: {
        map: function (doc) {
          if (doc.type == 'task' && !doc.trash) {
            emit(doc.title, null)
          }
        }
      },
      by_created_at: {
        map: function (doc) {
          if (doc.type == 'task' && !doc.trash) {
            emit(Date.parse(doc.created_at), null)
          }
        }
      },
      by_updated_at: {
        map: function (doc) {
          if (doc.type == 'task' && !doc.trash) {
            emit(Date.parse(doc.updated_at), null)
          }
        }
      },
      by_size: {
        map: function (doc) {
          if (doc.type == 'task' && !doc.trash) {
            emit(doc.length, null)
          }
        }
      }
    }
  },

  '_design/emails': {
    views: {
      by_title: {
        map: function (doc) {
          if (doc.type == 'email' && !doc.trash) {
            emit(doc.title, null)
          }
        }
      },
      by_created_at: {
        map: function (doc) {
          if (doc.type == 'email' && !doc.trash) {
            emit(Date.parse(doc.created_at), null)
          }
        }
      },
      by_updated_at: {
        map: function (doc) {
          if (doc.type == 'email' && !doc.trash) {
            emit(Date.parse(doc.updated_at), null)
          }
        }
      },
      by_size: {
        map: function (doc) {
          if (doc.type == 'email' && !doc.trash) {
            emit(doc.length, null)
          }
        }
      }
    }
  },

  '_design/ebooks': {
    views: {
      by_title: {
        map: function (doc) {
          if (doc.type == 'ebook' && !doc.trash) {
            emit(doc.title, null)
          }
        }
      },
      by_created_at: {
        map: function (doc) {
          if (doc.type == 'ebook' && !doc.trash) {
            emit(Date.parse(doc.created_at), null)
          }
        }
      },
      by_updated_at: {
        map: function (doc) {
          if (doc.type == 'ebook' && !doc.trash) {
            emit(Date.parse(doc.updated_at), null)
          }
        }
      },
      by_size: {
        map: function (doc) {
          if (doc.type == 'ebook' && !doc.trash) {
            emit(doc.length, null)
          }
        }
      }
    }
  },

  '_design/flagged': {
    views: {
      all: {
        map: function (doc) {
          if (doc.flagged && !doc.trash) {
            emit(doc, null)
          }
        }
      }
    }
  },

  '_design/trash': {
    views: {
      by_title: {
        map: function (doc) {
          if (doc.trash && doc.type) {
            emit(doc.title, null)
          }
        }
      },
      by_created_at: {
        map: function (doc) {
          if (doc.trash && doc.type) {
            emit(Date.parse(doc.created_at), null)
          }
        }
      },
      by_updated_at: {
        map: function (doc) {
          if (doc.trash && doc.type) {
            emit(Date.parse(doc.updated_at), null)
          }
        }
      },
      by_deleted_at: {
        map: function (doc) {
          if (doc.trash && doc.type) {
            emit(Date.parse(doc.deleted_at), null)
          }
        }
      },
      by_size: {
        map: function (doc) {
          if (doc.trash && doc.type) {
            emit(doc.length, null)
          }
        }
      }
    }
  },

  '_design/tag': {
    views: {
      by_name: {
        map: function (doc) {
          var i
          if (doc.type && !doc.trash) {
            for (i in doc.tags) {
              emit([doc.tags[i]], null)
            }
          }
        }
      }
    }
  },

  '_design/tags': {
    views: {
      all: {
        map: function (doc) {
          if (doc.type && !doc.trash && doc.tags.length > 0) {
            for (var i in doc.tags) {
              emit(doc.tags[i], 1)
            }
          }
        },
        reduce: function (tag, counts) {
          var sum = 0
          for (var i = 0; i < counts.length; i++) {
            sum += counts[i]
          };
          return sum
        }
      }
    }
  }
}
