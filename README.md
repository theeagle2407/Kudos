# Kudos - Direct Creator Support Platform

> Support creators who deserve it. They keep 99%.

![Kudos](https://img.shields.io/badge/NEAR-Protocol-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)
![Status](https://img.shields.io/badge/status-live-success?style=for-the-badge)

---

##  The Problem

Content creators lose billions to platform fees:
- **YouTube Super Chat:** 30% fee
- **Twitch Subscriptions:** 50% fee  
- **Patreon:** 8-12% fee
- **Plus:** Payment delays of 7-30 days

**$10 BILLION creator economy.** Platforms take too much.

---

##  Our Solution: Kudos

**Direct tipping platform where creators keep 99%.**

### How It Works:

1. **Fan visits creator's Kudos page**
2. **Selects tip amount** ($5, $10, $25, custom)
3. **Sends instantly via NEAR**
4. **Creator receives 99%** in seconds

No middlemen. No delays. Just direct support.

---

##  Features

### For Fans:
-  **Instant tipping** - Send support in seconds
-  **Any amount** - $5, $10, $25, or custom
-  **Transparent fees** - See exactly what creator receives (99%)
-  **Anonymous option** - Support without revealing identity
-  **Transaction history** - View all your tips

### For Creators:
-  **Keep 99%** - Only 1% platform fee (vs 30-50% elsewhere)
-  **Instant payouts** - Get paid immediately, no waiting
-  **No minimums** - Withdraw any amount, anytime
-  **Full dashboard** - Track earnings, tips, and supporters
-  **Shareable profile** - One link to accept tips everywhere
-  **International** - Accept support from anywhere

---

##  Technical Architecture

### Tech Stack:
- **Frontend:** HTML/CSS/JavaScript (Vanilla)
- **Backend:** Vercel Serverless Functions
- **Blockchain:** NEAR Protocol (Testnet)
- **Payment Rails:** NEAR Intents + Stablecoins (USDC)
- **Deployment:** Vercel

### How Payments Work:
1. Fan sends tip in any currency
   ↓
2. NEAR Intent converts to USDC
   ↓
3. Smart contract processes payment
   - Deducts 1% fee
   - Transfers 99% to creator
   ↓
4. Transaction recorded on blockchain
   ↓
5. Creator notified + balance updated
```

### Key Technologies:
- **NEAR Intents:** Currency conversion and routing
- **Stablecoins (USDC):** Stable settlement currency
- **Cross-chain:** Works across multiple blockchains
- **Audit Trail:** Every transaction logged immutably

---

##  Why Kudos is important

### Comparison:

| Feature | Traditional Platforms | Kudos |
|---------|----------------------|-------|
| **Platform Fee** | 30-50% | **1%** |
| **Payment Time** | 7-30 days | **Instant** |
| **Minimum Payout** | $50-100 | **None** |
| **International** | Limited | **Worldwide** |
| **Transparency** | Low | **Full blockchain audit** |

---

##  Business Model

**Revenue:** 1% fee per transaction

**Target Users:**
- Streamers (Twitch, YouTube)
- Content creators (TikTok, Instagram)
- Podcasters
- Musicians
- Artists
- Writers

**Market Size:** $10B+ creator economy

**First Users:** 
- Small streamers tired of platform fees
- International creators who can't use Patreon
- Crypto-native creators

---

##  Local Development

### Prerequisites:
- Node.js 18+
- NEAR Testnet account (optional for testing)

### Setup:
```bash
# Clone repository
git clone https://github.com/theeagle2407/kudos
cd kudos

# Install dependencies
npm install

## How to Use

### For Creators:

1. **Get Your Link:**
   - Visit kudos.app/dashboard
   - Connect NEAR wallet
   - Get your unique link: `kudos.app/yourname`

2. **Share Everywhere:**
   - Bio links
   - Video descriptions  
   - Social media
   - Stream overlays

3. **Get Paid:**
   - Fans send tips
   - You receive 99% instantly
   - Withdraw anytime

### For Fans:

1. **Find Creator:**
   - Visit their Kudos link

2. **Send Tip:**
   - Choose amount
   - Connect wallet
   - Send

3. **Done:**
   - Creator gets paid instantly
   - You get confirmation

---

##  Security & Trust

**How we keep it safe:**
-  **TEE (Trusted Execution Environment)** for secure processing
-  **Blockchain verification** for all transactions
-  **Open-source code** for transparency
-  **No custody** of funds (direct wallet-to-wallet)
-  **Full audit trail** on NEAR blockchain

---

##  Roadmap

### Phase 1: MVP (Current) 
- Basic tipping functionality
- Creator profiles
- Dashboard
- Transaction history

### Phase 2: Enhanced Features
- **Recurring tips** (monthly support)
- **Tip goals** (fundraising for projects)
- **Multiple creators** (split tips between collaborators)
- **Custom branding** (creator themes)

### Phase 3: Platform Expansion
- **Mobile app** (iOS + Android)
- **Browser extension** (tip anywhere)
- **Widget embeds** (for websites)
- **Analytics dashboard** (detailed insights)

### Phase 4: Advanced
- **Subscription model** (recurring support)
- **Exclusive content** (for supporters)
- **NFT rewards** (for top supporters)
- **Multi-chain expansion** (Ethereum, Polygon, etc.)

---

##  Built For

**NEARCON Innovation Sandbox 2026**
- Track: Open Society - From Finance to the Real World
- Focus: Stablecoins + NEAR Intents + Real-world workflows

### Requirements Met:
-  **NEAR Intents:** Currency conversion and routing
-  **Stablecoins:** USDC settlement
-  **Real-world workflow:** Direct creator payments
-  **Auditability:** Full transaction log
-  **Reliability:** Clear payment flow with failure handling
-  **Open by default:** Any creator, any fan, any currency

---

##  License

MIT License - see [LICENSE](LICENSE) file

---

##  Acknowledgments

- NEAR Foundation for Intents framework
- Creator community for inspiration
- All supporters who believe in fair creator compensation

---

##  Contact

**Built by:** theeagle2407 
**Email:** elijahoreoluwa45@gmail.com 
**Twitter:** @theeagle2407
**Discord:** @theeagle_0001

---

**Support creators who deserve it. They keep 99%. **

Built with NEAR Protocol | Powered by NEAR Intents | Secured by Stablecoins
