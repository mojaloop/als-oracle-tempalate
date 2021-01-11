'use strict'

const OpenapiBackend = require('@mojaloop/central-services-shared').Util.OpenapiBackend
const participants = require('./participants')
const participantsTypeId = require('./participants/{Type}/{ID}')
const health = require('./health')

module.exports = {
  HealthGet: health.get,
  validationFail: OpenapiBackend.validationFail,
  notFound: OpenapiBackend.notFound,
  methodNotAllowed: OpenapiBackend.methodNotAllowed,
  ParticipantsPost: participants.post,
  ParticipantsByTypeAndIDGet: participantsTypeId.get,
  ParticipantsByTypeAndIDPost: participantsTypeId.post,
  ParticipantsByTypeAndIDPut: participantsTypeId.put,
  ParticipantsByTypeAndIDDelete: participantsTypeId.delete,
}
