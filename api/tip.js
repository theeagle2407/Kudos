export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { creatorId, amount, fromAccount } = req.body;

    // Validate input
    if (!creatorId || !amount || !fromAccount) {
      return res.status(400).json({ 
        error: 'Missing required fields: creatorId, amount, fromAccount' 
      });
    }

    if (amount <= 0) {
      return res.status(400).json({ 
        error: 'Amount must be greater than 0' 
      });
    }

    // Calculate fee (1%)
    const fee = amount * 0.01;
    const creatorReceives = amount - fee;

    // Simulate blockchain transaction
    const transactionId = 'KDS' + Date.now().toString() + Math.random().toString(36).substr(2, 9);

    // In production, this would:
    // 1. Use NEAR Intents to convert currency to USDC
    // 2. Transfer to creator's wallet
    // 3. Record on blockchain
    // 4. Store in database

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return success
    return res.status(200).json({
      success: true,
      transactionId,
      amount,
      fee,
      creatorReceives,
      timestamp: new Date().toISOString(),
      message: `Successfully sent $${creatorReceives.toFixed(2)} to ${creatorId}`
    });

  } catch (error) {
    console.error('Tip processing error:', error);
    return res.status(500).json({ 
      error: 'Failed to process tip',
      message: error.message 
    });
  }
}