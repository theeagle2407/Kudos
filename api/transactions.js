export default async function handler(req, res) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { creatorId, limit = 10 } = req.query;

    if (!creatorId) {
      return res.status(400).json({ 
        error: 'Missing creatorId parameter' 
      });
    }

    // In production, this would fetch from database/blockchain
    // For demo, return simulated transaction data
    const supporters = [
      'alice.testnet', 
      'bob.testnet', 
      'charlie.testnet', 
      'dana.testnet',
      'eve.testnet',
      'frank.testnet',
      'Anonymous',
      'Anonymous'
    ];

    const amounts = [5, 10, 15, 25, 50, 100];
    
    const transactions = [];
    const numTransactions = Math.min(parseInt(limit), 20);

    for (let i = 0; i < numTransactions; i++) {
      const amount = amounts[Math.floor(Math.random() * amounts.length)];
      const timestamp = Date.now() - (i * 3600000 * (Math.random() * 24));
      
      transactions.push({
        id: 'KDS' + timestamp.toString() + Math.random().toString(36).substr(2, 6),
        from: supporters[Math.floor(Math.random() * supporters.length)],
        amount: amount,
        fee: (amount * 0.01).toFixed(2),
        received: (amount * 0.99).toFixed(2),
        timestamp: new Date(timestamp).toISOString(),
        status: 'completed',
        blockchainTxHash: '0x' + Math.random().toString(36).substr(2, 64)
      });
    }

    // Sort by timestamp (newest first)
    transactions.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

    return res.status(200).json({
      creatorId,
      transactions,
      total: transactions.length,
      currency: 'USDC'
    });

  } catch (error) {
    console.error('Transactions fetch error:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch transactions',
      message: error.message 
    });
  }
}