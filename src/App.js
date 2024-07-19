import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import DailyDevotion from './components/DailyDevotion';
import DevotionPage from './pages/DevotionPage';
import DevotionDetailPage from './pages/DevotionDetailPage';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import './App.css';
import { Container } from 'react-bootstrap';

const devotions = [
  { 
    id: 1, 
    title: 'God’s Love', 
    date: '2024-07-19', 
    verse: 'John 3:16', 
    scripture: 'For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.', 
    explanation: 'This verse shows the magnitude of God’s love for us, sacrificing His only Son for our salvation.', 
    content: 'Reflect on the immense love God has for you and how you can share that love with others.'
  },
  { 
    id: 2, 
    title: 'Trust in the Lord', 
    date: '2024-07-20', 
    verse: 'Proverbs 3:5-6', 
    scripture: 'Trust in the LORD with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.', 
    explanation: 'Trusting in God requires letting go of our own understanding and submitting to His will.', 
    content: 'Consider the areas of your life where you need to trust God more fully and seek His guidance.'
  },
  { 
    id: 3, 
    title: 'Strength in Weakness', 
    date: '2024-07-21', 
    verse: '2 Corinthians 12:9', 
    scripture: 'But he said to me, "My grace is sufficient for you, for my power is made perfect in weakness." Therefore I will boast all the more gladly about my weaknesses, so that Christ’s power may rest on me.', 
    explanation: 'God’s grace is sufficient, and His power is perfected in our weaknesses.', 
    content: 'Embrace your weaknesses as opportunities for God to show His strength through you.'
  },
  { 
    id: 4, 
    title: 'The Peace of God', 
    date: '2024-07-22', 
    verse: 'Philippians 4:6-7', 
    scripture: 'Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.', 
    explanation: 'God’s peace transcends all understanding and guards our hearts and minds.', 
    content: 'Bring your anxieties to God in prayer and experience His peace that surpasses all understanding.'
  },
  { 
    id: 5, 
    title: 'New Beginnings', 
    date: '2024-07-23', 
    verse: 'Isaiah 43:19', 
    scripture: 'See, I am doing a new thing! Now it springs up; do you not perceive it? I am making a way in the wilderness and streams in the wasteland.', 
    explanation: 'God is always at work doing new things in our lives.', 
    content: 'Look for the new things God is doing in your life and embrace the changes He brings.'
  },
  { 
    id: 6, 
    title: 'God’s Plan', 
    date: '2024-07-24', 
    verse: 'Jeremiah 29:11', 
    scripture: 'For I know the plans I have for you, declares the LORD, plans to prosper you and not to harm you, plans to give you hope and a future.', 
    explanation: 'God has a plan for each of us, a plan filled with hope and a future.', 
    content: 'Trust in God’s plan for your life, knowing that He has good intentions for you.'
  },
  { 
    id: 7, 
    title: 'Living in Faith', 
    date: '2024-07-25', 
    verse: 'Hebrews 11:1', 
    scripture: 'Now faith is confidence in what we hope for and assurance about what we do not see.', 
    explanation: 'Faith involves having confidence in God’s promises even when we cannot see them.', 
    content: 'Reflect on the areas where you need to strengthen your faith and trust in God’s promises.'
  },
  { 
    id: 8, 
    title: 'God’s Provision', 
    date: '2024-07-26', 
    verse: 'Philippians 4:19', 
    scripture: 'And my God will meet all your needs according to the riches of his glory in Christ Jesus.', 
    explanation: 'God promises to meet all our needs according to His riches in glory.', 
    content: 'Trust that God will provide for all your needs and thank Him for His provision.'
  },
  { 
    id: 9, 
    title: 'Hope in Christ', 
    date: '2024-07-27', 
    verse: 'Romans 15:13', 
    scripture: 'May the God of hope fill you with all joy and peace as you trust in him, so that you may overflow with hope by the power of the Holy Spirit.', 
    explanation: 'God is the source of all hope, joy, and peace as we trust in Him.', 
    content: 'Let the hope of Christ fill you with joy and peace, overflowing through the power of the Holy Spirit.'
  },
  { 
    id: 10, 
    title: 'God’s Strength', 
    date: '2024-07-28', 
    verse: 'Isaiah 40:31', 
    scripture: 'But those who hope in the LORD will renew their strength. They will soar on wings like eagles; they will run and not grow weary, they will walk and not be faint.', 
    explanation: 'God renews our strength when we place our hope in Him.', 
    content: 'Find your strength in the Lord and trust that He will sustain you through all challenges.'
  },
  { 
    id: 11, 
    title: 'God’s Grace', 
    date: '2024-07-29', 
    verse: 'Ephesians 2:8-9', 
    scripture: 'For it is by grace you have been saved, through faith—and this is not from yourselves, it is the gift of God—not by works, so that no one can boast.', 
    explanation: 'Salvation is a gift from God, given by His grace through faith.', 
    content: 'Reflect on the amazing grace of God that has saved you and how you can share that grace with others.'
  },
  { 
    id: 12, 
    title: 'God’s Faithfulness', 
    date: '2024-07-30', 
    verse: 'Lamentations 3:22-23', 
    scripture: 'Because of the LORD’s great love we are not consumed, for his compassions never fail. They are new every morning; great is your faithfulness.', 
    explanation: 'God’s love and compassion are new every morning, and His faithfulness is great.', 
    content: 'Start each day by acknowledging God’s faithfulness and thanking Him for His constant love and compassion.'
  },
  { 
    id: 13, 
    title: 'God’s Guidance', 
    date: '2024-07-31', 
    verse: 'Psalm 32:8', 
    scripture: 'I will instruct you and teach you in the way you should go; I will counsel you with my loving eye on you.', 
    explanation: 'God promises to guide us and teach us the way we should go.', 
    content: 'Seek God’s guidance in your decisions and trust that He will lead you in the right path.'
  },
  { 
    id: 14, 
    title: 'Overcoming Fear', 
    date: '2024-08-01', 
    verse: 'Isaiah 41:10', 
    scripture: 'So do not fear, for I am with you; do not be dismayed, for I am your God. I will strengthen you and help you; I will uphold you with my righteous right hand.', 
    explanation: 'God is with us, and He strengthens and helps us, so we do not need to fear.', 
    content: 'Whenever you feel afraid, remember that God is with you and will uphold you with His righteous right hand.'
  },
  { 
    id: 15, 
    title: 'God’s Peace', 
    date: '2024-08-02', 
    verse: 'John 14:27', 
    scripture: 'Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.', 
    explanation: 'Jesus gives us His peace, which is different from the peace the world offers.', 
    content: 'Embrace the peace that Jesus offers and let it guard your heart against trouble and fear.'
  },
  { 
    id: 16, 
    title: 'God’s Promises', 
    date: '2024-08-03', 
    verse: '2 Peter 1:4', 
    scripture: 'Through these he has given us his very great and precious promises, so that through them you may participate in the divine nature, having escaped the corruption in the world caused by evil desires.', 
    explanation: 'God’s promises enable us to participate in His divine nature and escape the world’s corruption.', 
    content: 'Reflect on the precious promises of God and how they help you to live a godly life.'
  },
  { 
    id: 17, 
    title: 'God’s Comfort', 
    date: '2024-08-04', 
    verse: '2 Corinthians 1:3-4', 
    scripture: 'Praise be to the God and Father of our Lord Jesus Christ, the Father of compassion and the God of all comfort, who comforts us in all our troubles, so that we can comfort those in any trouble with the comfort we ourselves receive from God.', 
    explanation: 'God comforts us in all our troubles so we can comfort others.', 
    content: 'Receive God’s comfort in your troubles and share that comfort with others who are in need.'
  },
  { 
    id: 18, 
    title: 'God’s Strength', 
    date: '2024-08-05', 
    verse: 'Psalm 46:1', 
    scripture: 'God is our refuge and strength, an ever-present help in trouble.', 
    explanation: 'God is our refuge and strength, always present to help us in times of trouble.', 
    content: 'Trust in God as your refuge and strength, knowing that He is always there to help you.'
  },
  { 
    id: 19, 
    title: 'God’s Love', 
    date: '2024-08-06', 
    verse: '1 John 4:9-10', 
    scripture: 'This is how God showed his love among us: He sent his one and only Son into the world that we might live through him. This is love: not that we loved God, but that he loved us and sent his Son as an atoning sacrifice for our sins.', 
    explanation: 'God’s love is shown through the sacrifice of His Son for our sins.', 
    content: 'Reflect on the sacrificial love of God and how you can show love to others in return.'
  },
  { 
    id: 20, 
    title: 'God’s Faithfulness', 
    date: '2024-08-07', 
    verse: 'Deuteronomy 7:9', 
    scripture: 'Know therefore that the LORD your God is God; he is the faithful God, keeping his covenant of love to a thousand generations of those who love him and keep his commandments.', 
    explanation: 'God is faithful and keeps His covenant of love with us.', 
    content: 'Acknowledge God’s faithfulness and commit to loving Him and keeping His commandments.'
  },
  { 
    id: 21, 
    title: 'God’s Grace', 
    date: '2024-08-08', 
    verse: '2 Corinthians 9:8', 
    scripture: 'And God is able to bless you abundantly, so that in all things at all times, having all that you need, you will abound in every good work.', 
    explanation: 'God’s grace abounds in our lives, enabling us to do good works.', 
    content: 'Receive God’s abundant grace and use it to abound in every good work He calls you to.'
  },
  { 
    id: 22, 
    title: 'God’s Guidance', 
    date: '2024-08-09', 
    verse: 'Psalm 23:3', 
    scripture: 'He refreshes my soul. He guides me along the right paths for his name’s sake.', 
    explanation: 'God refreshes our souls and guides us along the right paths.', 
    content: 'Seek God’s guidance in your life and allow Him to lead you on the right paths for His name’s sake.'
  },
  { 
    id: 23, 
    title: 'God’s Strength', 
    date: '2024-08-10', 
    verse: 'Nehemiah 8:10', 
    scripture: 'Do not grieve, for the joy of the LORD is your strength.', 
    explanation: 'The joy of the Lord is our strength, even in difficult times.', 
    content: 'Find strength in the joy of the Lord, knowing that He is your source of strength in all circumstances.'
  },
  { 
    id: 24, 
    title: 'God’s Peace', 
    date: '2024-08-11', 
    verse: 'Psalm 29:11', 
    scripture: 'The LORD gives strength to his people; the LORD blesses his people with peace.', 
    explanation: 'God gives strength and peace to His people.', 
    content: 'Receive the strength and peace that God offers you today and rest in His presence.'
  },
  { 
    id: 25, 
    title: 'God’s Promises', 
    date: '2024-08-12', 
    verse: '2 Corinthians 1:20', 
    scripture: 'For no matter how many promises God has made, they are "Yes" in Christ. And so through him the "Amen" is spoken by us to the glory of God.', 
    explanation: 'All of God’s promises are fulfilled in Christ.', 
    content: 'Trust in the promises of God, knowing that they are fulfilled in Christ and bring glory to God.'
  },
  { 
    id: 26, 
    title: 'God’s Comfort', 
    date: '2024-08-13', 
    verse: 'Psalm 34:18', 
    scripture: 'The LORD is close to the brokenhearted and saves those who are crushed in spirit.', 
    explanation: 'God is close to those who are brokenhearted and saves those who are crushed in spirit.', 
    content: 'Take comfort in knowing that God is near to you in your brokenness and will save you.'
  },
  { 
    id: 27, 
    title: 'God’s Love', 
    date: '2024-08-14', 
    verse: 'Romans 8:38-39', 
    scripture: 'For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.', 
    explanation: 'Nothing can separate us from the love of God in Christ Jesus.', 
    content: 'Rest in the assurance that God’s love for you is unbreakable and nothing can separate you from it.'
  },
  { 
    id: 28, 
    title: 'God’s Faithfulness', 
    date: '2024-08-15', 
    verse: '1 Thessalonians 5:24', 
    scripture: 'The one who calls you is faithful, and he will do it.', 
    explanation: 'God is faithful to His promises and will accomplish what He has called you to do.', 
    content: 'Trust in God’s faithfulness and know that He will equip you to fulfill His calling on your life.'
  },
  { 
    id: 29, 
    title: 'God’s Grace', 
    date: '2024-08-16', 
    verse: 'Titus 2:11-12', 
    scripture: 'For the grace of God has appeared that offers salvation to all people. It teaches us to say "No" to ungodliness and worldly passions, and to live self-controlled, upright and godly lives in this present age.', 
    explanation: 'God’s grace offers salvation and teaches us to live godly lives.', 
    content: 'Embrace the grace of God in your life and let it guide you to live a self-controlled and godly life.'
  },
  { 
    id: 30, 
    title: 'God’s Guidance', 
    date: '2024-08-17', 
    verse: 'Psalm 119:105', 
    scripture: 'Your word is a lamp for my feet, a light on my path.', 
    explanation: 'God’s word guides us and lights our path.', 
    content: 'Spend time in God’s word and let it guide your steps and light your path each day.'
  },
];

const App = () => {
  const [selectedDevotion, setSelectedDevotion] = useState(null);

  useEffect(() => {
    const randomDevotion = devotions[Math.floor(Math.random() * devotions.length)];
    setSelectedDevotion(randomDevotion);
  }, []);

  return (
    <Router>
      <Header />
      <Container className="my-4">
        <Routes>
          <Route
            path="/"
            element={
              selectedDevotion && (
                <DailyDevotion
                  title={selectedDevotion.title}
                  date={selectedDevotion.date}
                  verse={selectedDevotion.verse}
                  scripture={selectedDevotion.scripture}
                  explanation={selectedDevotion.explanation}
                  content={selectedDevotion.content}
                />
              )
            }
          />
          <Route path="/devotions" element={<DevotionPage devotions={devotions} selectDevotion={setSelectedDevotion} />} />
          <Route path="/devotion/:id" element={<DevotionDetailPage devotions={devotions} />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
