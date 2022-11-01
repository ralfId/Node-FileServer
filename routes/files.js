const { Router } = require('express');
const { uploadFile } = require('../controllers/filesController');

const router = Router();

/**
 * @openapi
 * /api/files:
 *  post:
 *   tags:
 *   - Files
 *   consumes:
 *   - multipart/form-data
 *   parameters:
 *   - name: data_empleados
 *     in: formData
 *     description: Un archivo .csv que contiene los datos a procesar
 *     required: true
 *     schema:
 *       type: file
 *   responses:
 *     '200':
 *       description: Se guardaron los registros correctamente.
 *       content: 
 *         'application/json': {}
 *     '400':
 *       description: Bad request.
 *       content: 
 *         'application/json': { }
 */
router.post('/', uploadFile);

module.exports = router;    