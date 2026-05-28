import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';

// Generate 1000 unique names
const generateNames = () => {
  const adjectives = [
    'Shadow', 'Cosmic', 'Neon', 'Mystic', 'Toxic', 'Crimson', 'Dark', 'Crystal', 'Frozen', 'Phantom',
    'Silver', 'Golden', 'Electric', 'Lunar', 'Solar', 'Void', 'Cyber', 'Ghost', 'Inferno', 'Blizzard',
    'Savage', 'Iron', 'Steel', 'Venom', 'Thunder', 'Storm', 'Blaze', 'Frost', 'Night', 'Soul',
    'Blood', 'Ruby', 'Emerald', 'Sapphire', 'Diamond', 'Onyx', 'Jade', 'Obsidian', 'Aqua', 'Vampire', 'Zombie', 'Demon', 'Angel'
  ];
  const nouns = [
    'Blade', 'Wolf', 'Ninja', 'Slayer', 'Dragon', 'Ghost', 'Knight', 'Striker', 'Viper', 'Falcon',
    'Hunter', 'Sniper', 'Warrior', 'Assassin', 'Ranger', 'Reaper', 'Shadow', 'King', 'Queen', 'Lord',
    'Master', 'God', 'Beast', 'Monster', 'Titan', 'Legend', 'Hero', 'Villain', 'Pro', 'Noob', 'Gamer',
    'Player', 'Hacker', 'Coder', 'Glitch', 'Virus', 'Flame', 'Spark', 'Pulse', 'Strike', 'Force', 'Spirit', 'Heart'
  ];
  
  const names = new Set();
  
  let i = 0;
  while(names.size < 1000 && i < 10000) {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    const suffix = Math.random() > 0.5 ? '' : Math.floor(Math.random() * 100);
    const prefix = Math.random() > 0.8 ? 'The' : '';
    
    let name = `${prefix}${adj}${noun}${suffix}`;
    if (Math.random() > 0.9) {
       name = `${adj}_${noun}`;
    }
    
    names.add(name);
    i++;
  }
  return Array.from(names).slice(0, 1000);
};

const RobloxRpNamesPage = () => {
  const names = useMemo(() => generateNames(), []);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>1000+ Roblox RP Names | Best Roleplay Names</title>
        <meta name="description" content="Discover 1000+ unique and cool Roblox RP names for your next roleplay character. Find the perfect name today!" />
        <meta name="keywords" content="Roblox RP Names, Cool Roblox RP Names, Funny Roblox RP Names, Aesthetic Roblox RP Names, Cute Roblox RP Names, Best Roblox RP Names, Unique Roblox RP Names, Roblox Roleplay Names, Roblox RP Name Ideas, Roblox RP Username Ideas, Roblox RP Display Names, Roblox RP Names for Girls, Roblox RP Names for Boys, Girl Roblox RP Names, Boy Roblox RP Names, Stylish Roblox RP Names, Creative Roblox RP Names, Good Roblox RP Names, Epic Roblox RP Names, Scary Roblox RP Names, Soft Roblox RP Names, Emo Roblox RP Names, Dark Roblox RP Names, Rich Roblox RP Names, Royal Roblox RP Names, Anime Roblox RP Names, Brookhaven RP Names, Bloxburg RP Names, Royale High RP Names, Adopt Me RP Names, Funny Brookhaven RP Names, Cute Brookhaven RP Names, Aesthetic Brookhaven Names, Roblox Name Generator, Roblox RP Name Generator, Roblox Username Generator, Roblox Display Name Ideas, Cool Roblox Usernames, Funny Roblox Usernames, Aesthetic Roblox Usernames, Cute Roblox Usernames, Unique Roblox Usernames, Best Roblox Usernames, Roblox Character Names, Roleplay Name Ideas, Gaming RP Names, Online RP Names, Roblox Gamer Names, Roblox Nicknames, Roblox Name Ideas, Cool RP Names, Funny RP Names, Cute RP Names, Aesthetic RP Names, Roleplay Usernames, Roleplay Display Names, Roblox Identity Names, Roblox Fantasy Names, Roblox Couple RP Names, Roblox Vampire RP Names, Roblox Mafia RP Names, Roblox School RP Names, Roblox Cafe RP Names, Roblox Family RP Names, Roblox Princess RP Names, Roblox Bad Girl RP Names, Roblox Bad Boy RP Names, Roblox Soft Girl RP Names, Roblox Alpha Names, Roblox Troll Names, Roblox Meme Names" />
        <link rel="canonical" href="https://www.quetext.in/roblox-rp-names" />
      </Helmet>
      
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          1000+ Roblox RP Names
        </h1>
        <p className="text-lg text-gray-600">
          Looking for the perfect name for your next Roblox roleplay character? Browse our collection of over 1000 unique, cool, and creative RP names. Click any name to copy it instantly!
        </p>
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {names.map((name, index) => (
          <div 
            key={index}
            onClick={() => copyToClipboard(name, index)}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-purple-300 hover:shadow-md transition-all cursor-pointer flex flex-col items-center justify-center relative group"
          >
            <span className="font-semibold text-gray-800 break-all text-center group-hover:text-purple-600 transition-colors">
              {name}
            </span>
            {copiedIndex === index && (
              <div className="absolute inset-0 bg-purple-500 text-white rounded-xl flex items-center justify-center text-sm font-bold animate-pulse">
                Copied!
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RobloxRpNamesPage;
