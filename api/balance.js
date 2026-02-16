export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { creatorId } = req.query;

    if (!creatorId) {
      return res.status(400).json({ 
        error: 'Missing creatorId parameter' 
      });
    }

    // In production, this would fetch from database/blockchain
    // For demo, return simulated data
    const demoBalance = {
      creatorId,
      totalEarnings: (Math.random() * 1000 + 100).toFixed(2),
      totalTips: Math.floor(Math.random() * 50) + 10,
      monthlyEarnings: (Math.random() * 300 + 50).toFixed(2),
      availableBalance: (Math.random() * 500 + 50).toFixed(2),
      currency: 'USDC',
      lastUpdated: new Date().toISOString()
    };

    return res.status(200).json(demoBalance);

  } catch (error) {
    console.error('Balance fetch error:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch balance',
      message: error.message 
    });
  }
}