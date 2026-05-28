import React, { useMemo, useState } from 'react';
import { Helmet } from 'react-helmet';

// Dictionaries for generator
const dictionaries = {
  Aesthetic: {
    adjectives: ['Lunar', 'Cloud', 'Soft', 'Starry', 'Pastel', 'Dreamy', 'Velvet', 'Crystal', 'Angel', 'Cherry', 'Peach', 'Rose', 'Hazel'],
    nouns: ['Sky', 'Boba', 'Moon', 'Dust', 'Petal', 'Heart', 'Tears', 'Glow', 'Aura', 'Wisp', 'Fairy', 'Vibe', 'Kiss']
  },
  Dark: {
    adjectives: ['Shadow', 'Void', 'Grim', 'Fallen', 'Broken', 'Toxic', 'Dark', 'Bloody', 'Soul', 'Demon', 'Vampire', 'Cursed', 'Bleak', 'Emo'],
    nouns: ['Reaper', 'Blade', 'Slayer', 'Ghost', 'Ghoul', 'Corpse', 'Venom', 'Abyss', 'Wraith', 'Fiend', 'Phantom', 'Sin']
  },
  Cool: {
    adjectives: ['Neon', 'Cyber', 'Cosmic', 'Electric', 'Savage', 'Iron', 'Steel', 'Frost', 'Blaze', 'Nova', 'Ultra', 'Hyper', 'Stealth', 'Epic'],
    nouns: ['Ninja', 'Striker', 'Viper', 'Falcon', 'Hunter', 'Sniper', 'Titan', 'Glitch', 'Spark', 'Pulse', 'Force', 'Ranger', 'Hacker']
  },
  Funny: {
    adjectives: ['Derpy', 'Silly', 'Chunky', 'Stinky', 'Noob', 'Goofy', 'Wacky', 'Dizzy', 'Clumsy', 'Spicy', 'Saucy', 'Meme', 'Troll'],
    nouns: ['Potato', 'Nugget', 'Bacon', 'Goblin', 'Burger', 'Pug', 'Turtle', 'Chonk', 'Boi', 'Dude', 'Chicken', 'Monkey', 'Banana']
  },
  Anime: {
    adjectives: ['Kawaii', 'Tsundere', 'Yandere', 'Senpai', 'Kouhai', 'Chibi', 'Sakura', 'Mystic', 'Kitsune', 'Neko', 'Ronin', 'Manga'],
    nouns: ['Otaku', 'Hero', 'Samurai', 'Ninja', 'Waifu', 'Baka', 'Kun', 'Chan', 'Sensei', 'Shogun', 'Kami', 'Demon']
  }
};

const allAdjectives = Object.values(dictionaries).flatMap(d => d.adjectives);
const allNouns = Object.values(dictionaries).flatMap(d => d.nouns);

const generateSingleName = (category) => {
  const adjs = category === 'All' ? allAdjectives : dictionaries[category].adjectives;
  const nouns = category === 'All' ? allNouns : dictionaries[category].nouns;
  
  const adj = adjs[Math.floor(Math.random() * adjs.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  
  const suffix = Math.random() > 0.5 ? '' : Math.floor(Math.random() * 999);
  const prefix = Math.random() > 0.85 ? 'The' : '';
  const spacer = Math.random() > 0.7 ? '_' : (Math.random() > 0.8 ? 'x' : '');
  
  return `${prefix}${adj}${spacer}${noun}${suffix}`;
};

const generateMassNames = (category, count = 1000) => {
  const names = new Set();
  let i = 0;
  while(names.size < count && i < count * 10) {
    names.add(generateSingleName(category));
    i++;
  }
  return Array.from(names).slice(0, count);
};

const RobloxRpNamesPage = () => {
  const [category, setCategory] = useState('All');
  // State for the interactive generator section
  const [generatedNames, setGeneratedNames] = useState(() => generateMassNames('All', 12));
  // State for the SEO bulk list
  const massNames = useMemo(() => generateMassNames('All', 1000), []);
  
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [copiedMassIndex, setCopiedMassIndex] = useState(null);

  const handleGenerate = () => {
    setGeneratedNames(generateMassNames(category, 12));
  };

  const copyToClipboard = (text, index, isMass = false) => {
    navigator.clipboard.writeText(text);
    if (isMass) {
      setCopiedMassIndex(index);
      setTimeout(() => setCopiedMassIndex(null), 2000);
    } else {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet>
        <title>Roblox RP Names Generator</title>
        <meta name="description" content="Use our Roblox RP Name Generator to create unique, aesthetic, cool, funny, and dark roleplay usernames instantly. Plus, browse our list of 1000+ ideas!" />
        <meta name="keywords" content="Roblox RP Names, Cool Roblox RP Names, Funny Roblox RP Names, Aesthetic Roblox RP Names, Cute Roblox RP Names, Best Roblox RP Names, Unique Roblox RP Names, Roblox Roleplay Names, Roblox RP Name Ideas, Roblox RP Username Ideas, Roblox RP Display Names, Roblox RP Names for Girls, Roblox RP Names for Boys, Girl Roblox RP Names, Boy Roblox RP Names, Stylish Roblox RP Names, Creative Roblox RP Names, Good Roblox RP Names, Epic Roblox RP Names, Scary Roblox RP Names, Soft Roblox RP Names, Emo Roblox RP Names, Dark Roblox RP Names, Rich Roblox RP Names, Royal Roblox RP Names, Anime Roblox RP Names, Brookhaven RP Names, Bloxburg RP Names, Royale High RP Names, Adopt Me RP Names, Funny Brookhaven RP Names, Cute Brookhaven RP Names, Aesthetic Brookhaven Names, Roblox Name Generator, Roblox RP Name Generator, Roblox Username Generator, Roblox Display Name Ideas, Cool Roblox Usernames, Funny Roblox Usernames, Aesthetic Roblox Usernames, Cute Roblox Usernames, Unique Roblox Usernames, Best Roblox Usernames, Roblox Character Names, Roleplay Name Ideas, Gaming RP Names, Online RP Names, Roblox Gamer Names, Roblox Nicknames, Roblox Name Ideas, Cool RP Names, Funny RP Names, Cute RP Names, Aesthetic RP Names, Roleplay Usernames, Roleplay Display Names, Roblox Identity Names, Roblox Fantasy Names, Roblox Couple RP Names, Roblox Vampire RP Names, Roblox Mafia RP Names, Roblox School RP Names, Roblox Cafe RP Names, Roblox Family RP Names, Roblox Princess RP Names, Roblox Bad Girl RP Names, Roblox Bad Boy RP Names, Roblox Soft Girl RP Names, Roblox Alpha Names, Roblox Troll Names, Roblox Meme Names" />
        <link rel="canonical" href="https://www.quetext.in/roblox-rp-names" />
      </Helmet>
      
      {/* Tool Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">
          Roblox RP Name Generator
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Create the perfect username for Brookhaven, Bloxburg, or any Roblox roleplay game. Select your style and generate unlimited creative name ideas instantly!
        </p>
      </div>

      {/* Interactive Generator Tool */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden mb-16">
        <div className="bg-gray-50 border-b border-gray-200 p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <label className="font-semibold text-gray-700">Name Style:</label>
              <select 
                value={category} 
                onChange={(e) => setCategory(e.target.value)}
                className="bg-white border border-gray-300 text-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium"
              >
                <option value="All">Surprise Me! (All)</option>
                <option value="Aesthetic">Aesthetic & Cute</option>
                <option value="Cool">Cool & Epic</option>
                <option value="Dark">Dark & Emo</option>
                <option value="Funny">Funny & Meme</option>
                <option value="Anime">Anime & Kawaii</option>
              </select>
            </div>
            
            <button 
              onClick={handleGenerate}
              className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all transform hover:scale-105 active:scale-95"
            >
              Generate Names ✨
            </button>
          </div>
        </div>
        
        <div className="p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {generatedNames.map((name, index) => (
              <div 
                key={index}
                onClick={() => copyToClipboard(name, index, false)}
                className="group relative bg-gray-50 hover:bg-purple-50 border border-gray-200 hover:border-purple-300 p-4 rounded-xl cursor-pointer transition-all flex items-center justify-center text-center h-20 shadow-sm hover:shadow"
              >
                <span className="font-bold text-xl text-gray-800 group-hover:text-purple-600 transition-colors break-all">
                  {name}
                </span>
                
                {copiedIndex === index ? (
                  <div className="absolute inset-0 bg-purple-500 text-white rounded-xl flex items-center justify-center font-bold animate-pulse">
                    Copied!
                  </div>
                ) : (
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 rounded-xl transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="bg-white text-purple-600 text-xs font-bold px-2 py-1 rounded-md shadow-sm transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                      Click to Copy
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <hr className="my-12 border-gray-200" />
      
      {/* 1000+ List for SEO */}
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">Browse 1000+ Roleplay Names</h2>
          <p className="text-gray-600">Want more inspiration? Here is a massive list of pre-generated Roblox RP names you can copy and use right away.</p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {massNames.map((name, index) => (
            <div 
              key={`mass-${index}`}
              onClick={() => copyToClipboard(name, index, true)}
              className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 hover:border-blue-300 hover:shadow transition-all cursor-pointer flex flex-col items-center justify-center relative group"
            >
              <span className="font-medium text-gray-700 text-sm break-all text-center group-hover:text-blue-600">
                {name}
              </span>
              {copiedMassIndex === index && (
                <div className="absolute inset-0 bg-blue-500 text-white rounded-lg flex items-center justify-center text-xs font-bold animate-pulse">
                  Copied!
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RobloxRpNamesPage;
