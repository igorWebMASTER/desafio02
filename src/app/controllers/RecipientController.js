import Recipient from '../models/Recipient';

class RecipientController {
  async store(req, res) {
    const recipientExists = await Recipient.findOne({
      where: { name: req.body.name },
    });

    if (recipientExists) {
      return res.status(400).json({ error: 'Recipient already exists' });
    }
    const {
      id,
      name,
      street,
      complement,
      state,
      city,
      cep,
    } = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      street,
      complement,
      state,
      city,
      cep,
    });
  }
}

export default new RecipientController();
