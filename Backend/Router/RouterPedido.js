module.exports = (app) => {
    const controller = require('../Controllers/ControllerPedido');
    const router = require('express').Router();
    const QRcode = require('qrcode');
    router.get('/', controller.findAll);
    router.post('/', controller.create);
    router.put('/:id', controller.update);
    router.delete('/:id', controller.delete);
    /**
     * ----------------------------------------------------------------------------------------------------
     * FUNCIÓN PARA CREAR UN CODIGO QR CUANDO GENERARAS EL PEDIDO CON EL TRACKER CORRESPONDIENTE
     * PUDIENDO LEER DESPUES POR EL MOVIL 
     * ---------------------------------------------------------------------------------------------------- 
     */
    router.post('/generateQR/:idPedido', async (req, res) => {
        try {
            const id = req.params.idPedido;
            if (!id) {
                return res.status(400).send('idPedido is required');
            }
            const qrData = await QRcode.toDataURL(id, {
                errorCorrectionLevel: 'H',
                margin: 1,
                width: 300

            });
            res.json({ qrCode: qrData });
        } catch (error) {
            console.log(error);
            res.status(500).send('Error generating QR code');
        }
    });

    app.use('/api/pedido', router);
}