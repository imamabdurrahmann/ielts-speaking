/**
 * IELTS Speaking Data — Makkar Jan-April 2026
 * All content extracted from the official cue card PDF
 */

const IELTS_DATA = {

  // ==========================================
  // PART 1: Introduction & Interview (17 Topics)
  // ==========================================
  part1: [
    {
      id: 'p1-study-work',
      title: 'Study / Work',
      questions: [
        { q: 'What subject are you studying? / What do you do for work?', hint: 'Name your subject/job, explain why you chose it' },
        { q: 'Why did you choose to study that subject? / Why did you choose that kind of work?', hint: 'Personal motivation, interest, career prospects' },
        { q: 'Do you like your subject / job? Why?', hint: 'Give specific reasons with examples' },
        { q: 'What do you find most interesting about your subject / job?', hint: 'Be specific — particular aspects you enjoy' },
        { q: 'Is it a popular subject / job in your country?' }
      ]
    },
    {
      id: 'p1-hometown',
      title: 'Hometown',
      questions: [
        { q: 'Where is your hometown?', hint: 'Name the city/town and country' },
        { q: 'Do you like your hometown? Why / Why not?', hint: 'Give reasons — lifestyle, people, atmosphere' },
        { q: 'What is your hometown known for?', hint: 'Famous food, landmarks, culture, people' },
        { q: 'How has your hometown changed over the years?', hint: 'Development, population, infrastructure changes' },
        { q: 'Would you like to live in your hometown in the future?' }
      ]
    },
    {
      id: 'p1-accommodation',
      title: 'Home / Accommodation',
      questions: [
        { q: 'What kind of accommodation do you live in?', hint: 'Describe your home — apartment, house, flat, dormitory' },
        { q: 'Do you live in a house or an apartment?', hint: 'Give details about size, location, rooms' },
        { q: 'Who do you live with?', hint: 'Family, roommates, alone' },
        { q: 'What is your favorite room in your home?', hint: 'Describe the room and why it is special to you' },
        { q: 'What would you change about your home?', hint: 'Improvements or things you would like to add' }
      ]
    },
    {
      id: 'p1-advertising',
      title: 'Advertising',
      questions: [
        { q: 'Do you often see advertisements?', hint: 'Where — TV, social media, billboards, online' },
        { q: 'What kinds of advertisements do you usually see?', hint: 'Product ads, service ads, political ads' },
        { q: 'Do you enjoy watching advertisements? Why / Why not?', hint: 'Entertainment value vs. interruption' },
        { q: 'What makes an advertisement effective?', hint: 'Humor, emotion, information, celebrity endorsement' },
        { q: 'Do you think advertising influences people\'s choices?' }
      ]
    },
    {
      id: 'p1-emails-letters',
      title: 'Emails / Letters',
      questions: [
        { q: 'Do you prefer sending emails or writing letters?', hint: 'Speed, formality, personal touch' },
        { q: 'How often do you write emails?', hint: 'Work, school, personal communication' },
        { q: 'What do you usually write about in emails?', hint: 'Work updates, personal messages, enquiries' },
        { q: 'Do you think emails are important for communication?', hint: 'Advantages — speed, cost, record-keeping' },
        { q: 'What are the differences between emails and letters?', hint: 'Speed, format, formality levels' }
      ]
    },
    {
      id: 'p1-sports',
      title: 'Sports',
      questions: [
        { q: 'Do you like sports?', hint: 'Yes/no and what types you enjoy' },
        { q: 'What sports are popular in your country?', hint: 'Football, cricket, basketball, etc.' },
        { q: 'Do you play any sports?', hint: 'Current or past participation' },
        { q: 'Did you play sports when you were young?', hint: 'Childhood experiences and memories' },
        { q: 'Would you like to try any new sports?' }
      ]
    },
    {
      id: 'p1-public-transport',
      title: 'Public Transportation',
      questions: [
        { q: 'What kind of transportation do you usually use?', hint: 'Bus, train, metro, car, bike, walking' },
        { q: 'Do you prefer public or private transportation?', hint: 'Give reasons — convenience, cost, comfort' },
        { q: 'Is public transportation popular in your area?', hint: 'Availability, reliability, frequency' },
        { q: 'What are the advantages of using public transportation?', hint: 'Environmental, cost, reduced traffic, safety' },
        { q: 'Are there any problems with public transportation in your area?' }
      ]
    },
    {
      id: 'p1-apps',
      title: 'Apps',
      questions: [
        { q: 'What kinds of apps do you use most often?', hint: 'Social media, navigation, banking, health, entertainment' },
        { q: 'Do you think apps are important in your daily life?', hint: 'How they help with routine tasks' },
        { q: 'What was the first app you downloaded?', hint: 'When and why you chose it' },
        { q: 'Do you prefer using apps or websites?', hint: 'Convenience, features, accessibility' },
        { q: 'Would you like to create your own app?' }
      ]
    },
    {
      id: 'p1-concentration',
      title: 'Concentration',
      questions: [
        { q: 'Is it difficult for you to concentrate?', hint: 'Share your experience' },
        { q: 'What do you do to help you concentrate?', hint: 'Environment changes, techniques, music' },
        { q: 'Do you find it easier to concentrate at home or in other places?', hint: 'Compare locations and reasons' },
        { q: 'What can distract you when you are trying to concentrate?', hint: 'Phone, noise, hunger, fatigue' },
        { q: 'Do you think concentration can be improved?' }
      ]
    },
    {
      id: 'p1-music',
      title: 'Music',
      questions: [
        { q: 'Do you like music?', hint: 'What genres do you enjoy' },
        { q: 'What type of music do you like?', hint: 'Pop, rock, classical, jazz, traditional, etc.' },
        { q: 'Did you learn to play any musical instrument?', hint: 'If yes — which one and for how long' },
        { q: 'Is music an important part of your life?', hint: 'How it affects your mood, activities' },
        { q: 'Do you think music can affect people\'s emotions?' }
      ]
    },
    {
      id: 'p1-museums',
      title: 'Museums',
      questions: [
        { q: 'Are there any museums in your area?', hint: 'Yes/no and types of museums nearby' },
        { q: 'Do you like visiting museums?', hint: 'Share your experience and preferences' },
        { q: 'What kind of museums do you like to visit?', hint: 'History, art, science, modern, specialized' },
        { q: 'Did you visit museums when you were a child?', hint: 'School trips or family visits' },
        { q: 'Do you think museums are important?' }
      ]
    },
    {
      id: 'p1-shopping',
      title: 'Shopping',
      questions: [
        { q: 'Do you enjoy shopping?', hint: 'What type of shopping do you prefer' },
        { q: 'What kind of shopping do you do most often?', hint: 'Groceries, clothes, electronics, online' },
        { q: 'Do you prefer shopping online or in physical stores?', hint: 'Compare convenience, experience, quality' },
        { q: 'Do you think shopping is a good way to spend free time?', hint: 'Social activity vs. hobby' },
        { q: 'Has the way you shop changed over the years?' }
      ]
    },
    {
      id: 'p1-birthdays',
      title: 'Birthdays',
      questions: [
        { q: 'How do you usually celebrate birthdays?', hint: 'Family gatherings, parties, activities' },
        { q: 'What did you do on your last birthday?', hint: 'Specific activities and people involved' },
        { q: 'Do you think birthdays are important?', hint: 'Why or why not — cultural perspective' },
        { q: 'What birthday gift would you like to receive?', hint: 'Be specific about preferences' },
        { q: 'Is there a birthday that was especially memorable for you?' }
      ]
    },
    {
      id: 'p1-seasons-weather',
      title: 'Seasons / Weather',
      questions: [
        { q: 'What is your favorite season?', hint: 'Explain why you prefer that season' },
        { q: 'What is the weather usually like in your hometown?', hint: 'Climate characteristics' },
        { q: 'Do you prefer hot or cold weather?', hint: 'Give reasons — activities, comfort' },
        { q: 'What do you usually do in your favorite season?', hint: 'Activities, hobbies, events' },
        { q: 'Do you think weather affects people\'s mood?' }
      ]
    },
    {
      id: 'p1-reading',
      title: 'Reading',
      questions: [
        { q: 'Do you like reading?', hint: 'What types of reading material do you enjoy' },
        { q: 'What kind of books do you like to read?', hint: 'Fiction, non-fiction, academic, genre fiction' },
        { q: 'Do you read before going to sleep?', hint: 'Habit and routine' },
        { q: 'Did you read more when you were a child or now?', hint: 'Compare reading habits over time' },
        { q: 'Do you think reading is important for children?' }
      ]
    },
    {
      id: 'p1-photography',
      title: 'Photography',
      questions: [
        { q: 'Do you like taking photos?', hint: 'Share your photography habits' },
        { q: 'What kind of photos do you like to take?', hint: 'Selfies, landscapes, portraits, events' },
        { q: 'Do you prefer taking photos with a camera or a phone?', hint: 'Compare quality, convenience, features' },
        { q: 'Do you keep many photos on your phone?', hint: 'How you organize them' },
        { q: 'Would you like to learn professional photography?' }
      ]
    },
    {
      id: 'p1-politeness',
      title: 'Politeness',
      questions: [
        { q: 'Do you think being polite is important?', hint: 'Why politeness matters in society' },
        { q: 'When do you usually be polite?', hint: 'Social situations, work, family' },
        { q: 'How do you show politeness to others?', hint: 'Actions, words, body language' },
        { q: 'Are people in your country generally polite?', hint: 'Cultural norms and expectations' },
        { q: 'Is it easy to learn to be polite?' }
      ]
    }
  ],

  // ==========================================
  // PART 2: Long Turn (37 Cue Cards)
  // ==========================================
  part2: [
    {
      id: 'p2-01',
      title: 'A Competition You Would Like to Take Part In',
      cue: 'Describe a competition you would like to take part in.\nYou should say:\nwhat competition it is\nwhere it would be held\nhow you would prepare for it\nand explain why you would like to take part in it.',
      points: [
        'what the competition is',
        'where it would be held',
        'how you would prepare for it',
        'why you would like to take part in it'
      ],
      followUps: [
        'What are the benefits of participating in competitions?',
        'Do you think competitions are important for children?',
        'What qualities do you need to be a winner?'
      ]
    },
    {
      id: 'p2-02',
      title: 'A Small Business You Would Like to Open',
      cue: 'Describe a small business you would like to open.\nYou should say:\nwhat business you would like to start\nwhy you would like to start this business\nwhat you would need to prepare\nand explain whether you would hire employees or work alone.',
      points: [
        'what business you would like to start',
        'why you would like to start this business',
        'what you would need to prepare',
        'whether you would hire employees or work alone'
      ],
      followUps: [
        'What challenges do small business owners face?',
        'Is starting a small business popular in your country?',
        'What qualities make someone a successful entrepreneur?'
      ]
    },
    {
      id: 'p2-03',
      title: 'An Interesting House or Apartment You Have Visited',
      cue: 'Describe an interesting house or apartment you have visited.\nYou should say:\nwhere it is\nwhat it looks like\nwho lives there\nand explain why you found it interesting.',
      points: [
        'where it is located',
        'what it looks like',
        'who lives there',
        'why you found it interesting'
      ],
      followUps: [
        'What are the differences between houses and apartments?',
        'What is a dream home like in your country?',
        'How has housing changed over the past few decades?'
      ]
    },
    {
      id: 'p2-04',
      title: 'A Place You Visited That Has Been Affected by Pollution',
      cue: 'Describe a place you visited that has been affected by pollution.\nYou should say:\nwhere the place is\nwhen you visited it\nwhat kind of pollution it has\nand explain how it affected the environment.',
      points: [
        'where the place is',
        'when you visited it',
        'what kind of pollution it has',
        'how it affected the environment'
      ],
      followUps: [
        'What are the main causes of pollution in your country?',
        'How can we reduce pollution?',
        'Do you think governments should tax polluting industries?'
      ]
    },
    {
      id: 'p2-05',
      title: 'A Time When You Received Money as a Gift',
      cue: 'Describe a time when you received money as a gift.\nYou should say:\nwhen you received it\nwho gave it to you\nwhat you did with it\nand explain how you felt about receiving money.',
      points: [
        'when you received it',
        'who gave it to you',
        'what you did with it',
        'how you felt about receiving money'
      ],
      followUps: [
        'Do you think giving money as a gift is appropriate?',
        'What are the advantages of giving money vs. gifts?',
        'What is the tradition of giving money in your culture?'
      ]
    },
    {
      id: 'p2-06',
      title: 'A Film That Made You Laugh a Lot',
      cue: 'Describe a film that made you laugh a lot.\nYou should say:\nwhat the film was\nwhen you watched it\nwho you watched it with\nand explain why it made you laugh.',
      points: [
        'what the film was',
        'when you watched it',
        'who you watched it with',
        'why it made you laugh'
      ],
      followUps: [
        'Do you prefer watching films alone or with others?',
        'What types of films are popular in your country?',
        'How do you think comedy films affect people?'
      ]
    },
    {
      id: 'p2-07',
      title: 'An Unusual Means of Transport',
      cue: 'Describe a time you took an unusual means of transport.\nYou should say:\nwhat transport you used\nwhere you went\nwho you were with\nand explain why it was unusual.',
      points: [
        'what transport you used',
        'where you went',
        'who you were with',
        'why it was unusual'
      ],
      followUps: [
        'What are the most common means of transport in your area?',
        'How do you think transport will change in the future?',
        'What can governments do to reduce traffic congestion?'
      ]
    },
    {
      id: 'p2-08',
      title: 'A Time You Needed to Search for Information',
      cue: 'Describe a time when you needed to search for information.\nYou should say:\nwhat information you needed\nwhere you searched for it\nhow you found it\nand explain why you needed that information.',
      points: [
        'what information you needed',
        'where you searched for it',
        'how you found it',
        'why you needed that information'
      ],
      followUps: [
        'How do people usually search for information nowadays?',
        'Do you think the internet has made research easier?',
        'What are the disadvantages of relying on online information?'
      ]
    },
    {
      id: 'p2-09',
      title: 'A Time You Spent with a Young Child',
      cue: 'Describe a time when you spent time with a young child.\nYou should say:\nwho the child was\nwhere you were\nwhat you did together\nand explain how you felt about the experience.',
      points: [
        'who the child was',
        'where you were',
        'what you did together',
        'how you felt about the experience'
      ],
      followUps: [
        'Do you think children learn better through play or study?',
        'How has childhood changed compared to the past?',
        'What do you think is the best way to raise children?'
      ]
    },
    {
      id: 'p2-10',
      title: 'A Skill You Took a Long Time to Master',
      cue: 'Describe a skill that took you a long time to master.\nYou should say:\nwhat the skill is\nhow long it took you to learn\nhow you learned it\nand explain why you decided to learn it.',
      points: [
        'what the skill is',
        'how long it took you to learn',
        'how you learned it',
        'why you decided to learn it'
      ],
      followUps: [
        'What skills are important for success in life?',
        'Do you think learning skills is easier for children or adults?',
        'What new skills would you like to learn in the future?'
      ]
    },
    {
      id: 'p2-11',
      title: 'Being Friendly to Someone You Didn\'t Like',
      cue: 'Describe a time when you were friendly to someone you didn\'t like.\nYou should say:\nwho the person was\nwhy you didn\'t like them\nwhy you had to be friendly\nand explain how you felt about it.',
      points: [
        'who the person was',
        'why you did not like them',
        'why you had to be friendly',
        'how you felt about it'
      ],
      followUps: [
        'Is it important to be friendly to everyone?',
        'What are the advantages of being polite to difficult people?',
        'How do you usually deal with people you don\'t like?'
      ]
    },
    {
      id: 'p2-12',
      title: 'A Foreign Country / Culture You Would Like to Learn More About',
      cue: 'Describe a foreign country or culture you would like to learn more about.\nYou should say:\nwhich country or culture it is\nhow you learned about it\nwhy you would like to learn more\nand explain what you would like to learn.',
      points: [
        'which country or culture it is',
        'how you learned about it',
        'why you would like to learn more',
        'what you would like to learn'
      ],
      followUps: [
        'Why do you think people are interested in foreign cultures?',
        'What are the advantages of learning about other cultures?',
        'Do you think cultural differences can cause problems between countries?'
      ]
    },
    {
      id: 'p2-13',
      title: 'A Time You Had to Be Polite',
      cue: 'Describe a time when you had to be polite.\nYou should say:\nwhen it was\nwho you were with\nwhy you had to be polite\nand explain how you felt about it.',
      points: [
        'when it was',
        'who you were with',
        'why you had to be polite',
        'how you felt about it'
      ],
      followUps: [
        'What situations require people to be polite?',
        'Is politeness the same in all cultures?',
        'Do you think people are naturally polite or is it learned?'
      ]
    },
    {
      id: 'p2-14',
      title: 'An Adventure You Would Like to Go On',
      cue: 'Describe an adventure you would like to go on.\nYou should say:\nwhat adventure it would be\nwhere you would go\nwho you would go with\nand explain why you would like to go on this adventure.',
      points: [
        'what adventure it would be',
        'where you would go',
        'who you would go with',
        'why you would like to go on this adventure'
      ],
      followUps: [
        'Why do some people enjoy adventure more than others?',
        'What are the benefits of adventure activities?',
        'Do you think adventure travel is becoming more popular?'
      ]
    },
    {
      id: 'p2-15',
      title: 'A Time When You Felt Bored',
      cue: 'Describe a time when you felt bored.\nYou should say:\nwhen and where it was\nwho you were with\nwhat you were doing\nand explain how you felt and what you did about it.',
      points: [
        'when and where it was',
        'who you were with',
        'what you were doing',
        'how you felt and what you did about it'
      ],
      followUps: [
        'Why do you think some people get bored more easily than others?',
        'Do you think boredom can be beneficial?',
        'What do you usually do when you feel bored?'
      ]
    },
    {
      id: 'p2-16',
      title: 'An Article You Read About Health',
      cue: 'Describe an article you read about health.\nYou should say:\nwhat the article was about\nwhere you read it\nwhy you read it\nand explain what you learned from it.',
      points: [
        'what the article was about',
        'where you read it',
        'why you read it',
        'what you learned from it'
      ],
      followUps: [
        'How do people in your country feel about health issues?',
        'Do you think people are more health-conscious nowadays?',
        'What can governments do to improve public health?'
      ]
    },
    {
      id: 'p2-17',
      title: 'A Person You Follow on Social Media',
      cue: 'Describe a person you follow on social media.\nYou should say:\nwho the person is\nhow you found them\nwhat they share on social media\nand explain why you follow them.',
      points: [
        'who the person is',
        'how you found them',
        'what they share on social media',
        'why you follow them'
      ],
      followUps: [
        'How has social media changed the way people get information?',
        'What are the advantages and disadvantages of following influencers?',
        'Do you think social media is good for society?'
      ]
    },
    {
      id: 'p2-18',
      title: 'A Piece of Local Food in Your Country That You Like',
      cue: 'Describe a piece of local food in your country that you like.\nYou should say:\nwhat it is\nwhere you usually eat it\nwhen you first tried it\nand explain why you like it.',
      points: [
        'what it is',
        'where you usually eat it',
        'when you first tried it',
        'why you like it'
      ],
      followUps: [
        'How has traditional food changed over the years?',
        'Why is food an important part of a country\'s culture?',
        'Do you think food from other countries is more popular than local food?'
      ]
    },
    {
      id: 'p2-19',
      title: 'Teaching Someone Something New',
      cue: 'Describe a time when you taught someone something new.\nYou should say:\nwho you taught\nwhat you taught them\nhow you taught them\nand explain how they reacted to learning it.',
      points: [
        'who you taught',
        'what you taught them',
        'how you taught them',
        'how they reacted to learning it'
      ],
      followUps: [
        'Do you think teaching is a good skill to have?',
        'How has the way teachers teach changed over the years?',
        'What qualities make a good teacher?'
      ]
    },
    {
      id: 'p2-20',
      title: 'A Skill That Is Important in Life',
      cue: 'Describe a skill that is important in life.\nYou should say:\nwhat the skill is\nhow you learned it\nwhy it is important\nand explain how it has helped you in life.',
      points: [
        'what the skill is',
        'how you learned it',
        'why it is important',
        'how it has helped you in life'
      ],
      followUps: [
        'What skills do you think children should learn at school?',
        'Are there any skills you wish you had learned?',
        'How can people develop new skills as adults?'
      ]
    },
    {
      id: 'p2-21',
      title: 'A Time When You Enjoyed Your Free Time',
      cue: 'Describe a time when you enjoyed your free time.\nYou should say:\nwhen it was\nwhat you did\nwho you were with\nand explain why you enjoyed it so much.',
      points: [
        'when it was',
        'what you did',
        'who you were with',
        'why you enjoyed it so much'
      ],
      followUps: [
        'How do you usually spend your free time?',
        'Do you think people have enough free time nowadays?',
        'What activities do you think are the best for relaxation?'
      ]
    },
    {
      id: 'p2-22',
      title: 'A Skill You Would Like to Learn',
      cue: 'Describe a skill you would like to learn in the future.\nYou should say:\nwhat skill you would like to learn\nwhy you would like to learn it\nhow you would learn it\nand explain when you would start learning it.',
      points: [
        'what skill you would like to learn',
        'why you would like to learn it',
        'how you would learn it',
        'when you would start learning it'
      ],
      followUps: [
        'What skills do you think are most valuable for the future?',
        'Is it easier to learn skills when you are young?',
        'How can people stay motivated when learning new skills?'
      ]
    },
    {
      id: 'p2-23',
      title: 'A Natural Place You Visited',
      cue: 'Describe a natural place you visited.\nYou should say:\nwhere it is\nwhat you did there\nwho you went with\nand explain how you felt about the experience.',
      points: [
        'where it is',
        'what you did there',
        'who you went with',
        'how you felt about the experience'
      ],
      followUps: [
        'Why do you think natural places are important?',
        'How can we protect natural places?',
        'Do you think people should visit natural places more often?'
      ]
    },
    {
      id: 'p2-24',
      title: 'Something You Did That Was New and Exciting',
      cue: 'Describe something you did that was new and exciting.\nYou should say:\nwhat you did\nwhen and where you did it\nwho you did it with\nand explain why it was exciting for you.',
      points: [
        'what you did',
        'when and where you did it',
        'who you did it with',
        'why it was exciting for you'
      ],
      followUps: [
        'What do you think makes experiences exciting?',
        'Do you think trying new things is important for personal growth?',
        'How do people usually find out about new activities?'
      ]
    },
    {
      id: 'p2-25',
      title: 'A Historic Place You Have Been To',
      cue: 'Describe a historic place you have been to.\nYou should say:\nwhere it is\nwhen you went there\nwhat you saw and learned\nand explain why you think it is important.',
      points: [
        'where it is',
        'when you went there',
        'what you saw and learned',
        'why you think it is important'
      ],
      followUps: [
        'Do you think historic places should be preserved?',
        'How can schools encourage children to learn about history?',
        'What are the advantages and disadvantages of visiting historic places?'
      ]
    },
    {
      id: 'p2-26',
      title: 'A Time You Disagreed with Someone',
      cue: 'Describe a time when you disagreed with someone.\nYou should say:\nwho you disagreed with\nwhat the disagreement was about\nhow you resolved it\nand explain how you felt about it.',
      points: [
        'who you disagreed with',
        'what the disagreement was about',
        'how you resolved it',
        'how you felt about it'
      ],
      followUps: [
        'How do you usually handle disagreements?',
        'Do you think disagreements can be good sometimes?',
        'What skills are important for resolving conflicts?'
      ]
    },
    {
      id: 'p2-27',
      title: 'A Song That Is Important to You',
      cue: 'Describe a song that is important to you.\nYou should say:\nwhat the song is\nwhat it is about\nwhen you first heard it\nand explain why it is important to you.',
      points: [
        'what the song is',
        'what it is about',
        'when you first heard it',
        'why it is important to you'
      ],
      followUps: [
        'What role does music play in people\'s lives?',
        'How does music affect people\'s emotions?',
        'Do you think music can bring people together?'
      ]
    },
    {
      id: 'p2-28',
      title: 'A Decision You Made That Changed Your Life',
      cue: 'Describe a decision you made that changed your life.\nYou should say:\nwhat the decision was\nwhat alternatives you had\nhow you made the decision\nand explain how it changed your life.',
      points: [
        'what the decision was',
        'what alternatives you had',
        'how you made the decision',
        'how it changed your life'
      ],
      followUps: [
        'How do you think people should make important decisions?',
        'What are some of the most difficult decisions young people face?',
        'Do you think we learn more from good decisions or from mistakes?'
      ]
    },
    {
      id: 'p2-29',
      title: 'A Book You Have Read Recently',
      cue: 'Describe a book you have read recently.\nYou should say:\nwhat book it is\nwhat it is about\nwhy you chose to read it\nand explain how you felt about it.',
      points: [
        'what book it is',
        'what it is about',
        'why you chose to read it',
        'how you felt about it'
      ],
      followUps: [
        'What kind of books are popular among young people in your country?',
        'Do you think reading habits are changing because of the internet?',
        'How can parents encourage children to read more?'
      ]
    },
    {
      id: 'p2-30',
      title: 'A Website You Visit Often',
      cue: 'Describe a website you visit often.\nYou should say:\nwhat the website is\nwhat it looks like\nhow often you visit it\nand explain why you visit it regularly.',
      points: [
        'what the website is',
        'what it looks like',
        'how often you visit it',
        'why you visit it regularly'
      ],
      followUps: [
        'How has the internet changed the way people spend their time?',
        'What are the advantages and disadvantages of spending time online?',
        'Do you think people rely too much on the internet?'
      ]
    },
    {
      id: 'p2-31',
      title: 'A Festival That Is Important in Your Country',
      cue: 'Describe a festival that is important in your country.\nYou should say:\nwhat festival it is\nhow you celebrate it\nwho you celebrate it with\nand explain why it is important.',
      points: [
        'what festival it is',
        'how you celebrate it',
        'who you celebrate it with',
        'why it is important'
      ],
      followUps: [
        'How have festivals changed over the years?',
        'Do you think festivals are important for cultural identity?',
        'What are the advantages of celebrating festivals with family?'
      ]
    },
    {
      id: 'p2-32',
      title: 'Something You Want to Do but Have Not Had Time For',
      cue: 'Describe something you want to do but have not had time for.\nYou should say:\nwhat you want to do\nwhy you want to do it\nwhen you plan to do it\nand explain why you have not been able to do it yet.',
      points: [
        'what you want to do',
        'why you want to do it',
        'when you plan to do it',
        'why you have not been able to do it yet'
      ],
      followUps: [
        'Why do you think many people don\'t have enough time for what they want?',
        'How do you manage your time between work and leisure?',
        'Do you think people today are busier than in the past?'
      ]
    },
    {
      id: 'p2-33',
      title: 'A Piece of Equipment in Your Home',
      cue: 'Describe a piece of equipment in your home.\nYou should say:\nwhat it is\nhow long you have had it\nhow often you use it\nand explain how it has made your life easier.',
      points: [
        'what it is',
        'how long you have had it',
        'how often you use it',
        'how it has made your life easier'
      ],
      followUps: [
        'What household equipment is most useful in modern life?',
        'How has technology changed the way we live at home?',
        'Do you think people depend too much on technology at home?'
      ]
    },
    {
      id: 'p2-34',
      title: 'A Plan You Have for the Future',
      cue: 'Describe a plan you have for the future.\nYou should say:\nwhat the plan is\nwhy you made this plan\nhow long you have had this plan\nand explain how you plan to achieve it.',
      points: [
        'what the plan is',
        'why you made this plan',
        'how long you have had this plan',
        'how you plan to achieve it'
      ],
      followUps: [
        'Do you think young people should make long-term plans?',
        'How do you think your life will change in the future?',
        'What are the advantages of having goals in life?'
      ]
    },
    {
      id: 'p2-35',
      title: 'A Time When You Were Surprised',
      cue: 'Describe a time when you were surprised.\nYou should say:\nwhat happened\nwhen and where it happened\nwho was with you\nand explain how you felt about it.',
      points: [
        'what happened',
        'when and where it happened',
        'who was with you',
        'how you felt about it'
      ],
      followUps: [
        'What kinds of things usually surprise people?',
        'How do you usually react when something unexpected happens?',
        'Do you think being surprised is usually a positive or negative experience?'
      ]
    },
    {
      id: 'p2-36',
      title: 'An Object You Cannot Live Without',
      cue: 'Describe an object you cannot live without.\nYou should say:\nwhat the object is\nwhen you got it\nhow often you use it\nand explain why it is so important to you.',
      points: [
        'what the object is',
        'when you got it',
        'how often you use it',
        'why it is so important to you'
      ],
      followUps: [
        'Do you think people rely too much on material things?',
        'What do you think is the most important invention in modern life?',
        'How has technology changed what objects are essential to us?'
      ]
    },
    {
      id: 'p2-37',
      title: 'A Time When You Felt Very Proud of Yourself',
      cue: 'Describe a time when you felt very proud of yourself.\nYou should say:\nwhat happened\nwhere and when it happened\nwho was there\nand explain why you felt proud.',
      points: [
        'what happened',
        'where and when it happened',
        'who was there',
        'why you felt proud'
      ],
      followUps: [
        'What do you think makes people feel proud of themselves?',
        'How can parents help children feel proud of their achievements?',
        'Do you think feeling proud is important for personal development?'
      ]
    }
  ],

  // ==========================================
  // PART 3: Discussion Topics
  // ==========================================
  part3: [
    {
      id: 'p3-01',
      title: 'Competitions in General',
      theme: 'Competition',
      points: [
        'What are the benefits of participating in competitions?',
        'Do you think competition is more important than cooperation?',
        'Are competitions among children beneficial or harmful?',
        'What qualities are needed to be a good competitor?',
        'How has the importance of competition changed over time?'
      ]
    },
    {
      id: 'p3-02',
      title: 'Small Businesses',
      theme: 'Business',
      points: [
        'What are the biggest challenges for starting a small business?',
        'How can governments help small businesses grow?',
        'Why do some small businesses fail while others succeed?',
        'Is starting a small business more popular today than in the past?',
        'What skills are needed to run a successful small business?'
      ]
    },
    {
      id: 'p3-03',
      title: 'Creativity & Innovation',
      theme: 'Competition',
      points: [
        'Why do some people become more creative than others?',
        'How can schools encourage creativity in students?',
        'Do you think creativity can be learned?',
        'What is the relationship between creativity and success?',
        'How has technology affected creativity?'
      ]
    },
    {
      id: 'p3-04',
      title: 'Youth & Education',
      theme: 'Education',
      points: [
        'How has education changed over the past few decades?',
        'What are the most important skills for young people to learn?',
        'Do you think traditional education is still relevant today?',
        'What role does technology play in modern education?',
        'How can we make education more accessible to everyone?'
      ]
    },
    {
      id: 'p3-05',
      title: 'Media Influence',
      theme: 'Media',
      points: [
        'How does social media influence people\'s behavior?',
        'Do you think the media should be more regulated?',
        'What are the advantages and disadvantages of being famous?',
        'How has the way people get news changed over the years?',
        'Do you think media coverage of events affects public opinion?'
      ]
    },
    {
      id: 'p3-06',
      title: 'Public Transport',
      theme: 'Transport',
      points: [
        'What are the main problems with public transportation in your area?',
        'How can governments encourage people to use public transport?',
        'Do you think private cars should be restricted in city centers?',
        'How might transportation change in the future?',
        'What are the environmental benefits of public transportation?'
      ]
    },
    {
      id: 'p3-07',
      title: 'Health & Lifestyle',
      theme: 'Health',
      points: [
        'Why do some people live longer than others?',
        'How can governments promote healthier lifestyles?',
        'What role does diet play in overall health?',
        'Is modern life making people less healthy?',
        'How has healthcare changed over the years?'
      ]
    },
    {
      id: 'p3-08',
      title: 'Work & Career',
      theme: 'Work',
      points: [
        'What factors are most important for career success?',
        'How has the job market changed in recent years?',
        'Do you think job satisfaction is more important than salary?',
        'What are the advantages and disadvantages of working from home?',
        'How do young people choose their careers?'
      ]
    },
    {
      id: 'p3-09',
      title: 'Communication',
      theme: 'Communication',
      points: [
        'How has technology changed the way people communicate?',
        'Do you think face-to-face communication is still important?',
        'What are the disadvantages of relying on digital communication?',
        'How has the internet affected relationships?',
        'Do you think people communicate differently now compared to the past?'
      ]
    },
    {
      id: 'p3-10',
      title: 'Environmental Protection',
      theme: 'Environment',
      points: [
        'What are the main causes of environmental problems?',
        'How can individuals contribute to environmental protection?',
        'Do you think governments should tax companies that pollute?',
        'What are the biggest environmental challenges facing the world?',
        'How has public awareness of environmental issues changed?'
      ]
    },
    {
      id: 'p3-11',
      title: 'Films & Entertainment',
      theme: 'Entertainment',
      points: [
        'What types of films are most popular in your country?',
        'How do films reflect the culture of a society?',
        'Do you think watching films is a good way to learn about other cultures?',
        'How has streaming affected the film industry?',
        'What makes a film successful?'
      ]
    },
    {
      id: 'p3-12',
      title: 'Travel & Tourism',
      theme: 'Travel',
      points: [
        'What are the benefits of travel for individuals?',
        'How has tourism affected local cultures?',
        'Do you think tourism is sustainable in the long term?',
        'What are the advantages and disadvantages of mass tourism?',
        'How has travel changed over the years?'
      ]
    },
    {
      id: 'p3-13',
      title: 'Childhood & Parenting',
      theme: 'Family',
      points: [
        'How has childhood changed compared to the past?',
        'What is the role of parents in a child\'s education?',
        'Do you think children today spend too much time on screens?',
        'What are the advantages and disadvantages of being an only child?',
        'How can parents encourage children to develop good habits?'
      ]
    },
    {
      id: 'p3-14',
      title: 'Food & Culture',
      theme: 'Food',
      points: [
        'Why is food an important part of a country\'s culture?',
        'How has traditional food changed over the years?',
        'Do you think people are more interested in food from other cultures nowadays?',
        'What are the advantages and disadvantages of fast food?',
        'How can we encourage people to eat more healthily?'
      ]
    },
    {
      id: 'p3-15',
      title: 'Sports & Exercise',
      theme: 'Sports',
      points: [
        'Why is regular exercise important?',
        'Do you think schools should prioritize physical education?',
        'How can governments encourage more people to exercise?',
        'What are the benefits of team sports compared to individual sports?',
        'How has technology affected the way people exercise?'
      ]
    },
    {
      id: 'p3-16',
      title: 'Technology & Society',
      theme: 'Technology',
      points: [
        'How has technology changed the way we work?',
        'Do you think technology makes people more isolated?',
        'What are the biggest risks of relying on technology?',
        'How might technology continue to change our lives in the future?',
        'Do you think children should learn to code from a young age?'
      ]
    },
    {
      id: 'p3-17',
      title: 'Music & Art',
      theme: 'Art',
      points: [
        'What role does music play in people\'s lives?',
        'Should art and music be taught in all schools?',
        'How has technology affected the art and music industries?',
        'Do you think art can influence society?',
        'What makes someone a talented artist or musician?'
      ]
    },
    {
      id: 'p3-18',
      title: 'Reading & Books',
      theme: 'Reading',
      points: [
        'Do you think reading habits are declining?',
        'What are the benefits of reading compared to watching TV?',
        'How can parents encourage children to read more?',
        'Has e-books changed the way people read?',
        'What type of reading material is most popular in your country?'
      ]
    },
    {
      id: 'p3-19',
      title: 'Fashion & Shopping',
      theme: 'Shopping',
      points: [
        'How has fashion changed over the years?',
        'Do you think people are influenced by fashion trends?',
        'What are the advantages and disadvantages of online shopping?',
        'How has technology changed the shopping experience?',
        'Do you think fast fashion is a problem?'
      ]
    },
    {
      id: 'p3-20',
      title: 'Weather & Climate',
      theme: 'Weather',
      points: [
        'How does weather affect people\'s daily activities?',
        'Has the weather in your area changed over the years?',
        'Do you think climate change is affecting weather patterns?',
        'What can individuals do to adapt to changing weather?',
        'How do different cultures respond to different climates?'
      ]
    },
    {
      id: 'p3-21',
      title: 'Friendship',
      theme: 'Social',
      points: [
        'What are the most important qualities of a good friend?',
        'How has social media affected friendships?',
        'Do you think people have fewer close friends than in the past?',
        'What are the differences between online friends and real-life friends?',
        'How do friendships change as people get older?'
      ]
    },
    {
      id: 'p3-22',
      title: 'Learning Skills',
      theme: 'Learning',
      points: [
        'What skills do you think are most important to learn?',
        'Is it better to specialize in one area or have broad knowledge?',
        'How can people learn new skills effectively?',
        'Do you think adults should continue learning throughout their lives?',
        'How has the internet changed the way people learn?'
      ]
    },
    {
      id: 'p3-23',
      title: 'Celebrations & Festivals',
      theme: 'Culture',
      points: [
        'Why are festivals important to communities?',
        'How have celebrations changed over the years?',
        'Do you think traditional festivals are being forgotten?',
        'What are the benefits of celebrating festivals together?',
        'How can we preserve traditional cultural celebrations?'
      ]
    },
    {
      id: 'p3-24',
      title: 'Animals & Nature',
      theme: 'Nature',
      points: [
        'Should animals be kept in zoos?',
        'How can we protect endangered species?',
        'Do you think people\'s attitudes toward animals have changed?',
        'What are the benefits of children growing up with pets?',
        'How does urban development affect wildlife?'
      ]
    },
    {
      id: 'p3-25',
      title: 'History & Heritage',
      theme: 'History',
      points: [
        'Why is it important to learn about history?',
        'How can we preserve historic buildings?',
        'Do you think historic sites should be open to tourists?',
        'How has technology changed the way we learn about history?',
        'What historic events have had the biggest impact on your country?'
      ]
    },
    {
      id: 'p3-26',
      title: 'Adventure & Risk',
      theme: 'Adventure',
      points: [
        'Why do some people enjoy adventure activities more than others?',
        'What are the benefits and risks of adventure travel?',
        'Do you think children should be encouraged to take risks?',
        'How has adventure tourism changed over the years?',
        'What skills are needed for adventure activities?'
      ]
    },
    {
      id: 'p3-27',
      title: 'Decision Making',
      theme: 'Decision',
      points: [
        'What is the best way to make important decisions?',
        'Do you think young people make good decisions?',
        'How can we teach children to make better decisions?',
        'What are the consequences of making poor decisions?',
        'Do you think we learn more from our mistakes than from our successes?'
      ]
    },
    {
      id: 'p3-28',
      title: 'Social Media Influence',
      theme: 'Social Media',
      points: [
        'How does social media influence young people?',
        'Should there be age restrictions on social media use?',
        'What are the advantages and disadvantages of being an influencer?',
        'How can we help young people use social media responsibly?',
        'Do you think social media will continue to be popular?'
      ]
    },
    {
      id: 'p3-29',
      title: 'Urban vs Rural Living',
      theme: 'Living',
      points: [
        'What are the advantages and disadvantages of living in a city?',
        'Why do many people move from rural areas to cities?',
        'How has urbanization affected communities?',
        'What are the environmental concerns of urban growth?',
        'Do you think more people will live in cities in the future?'
      ]
    },
    {
      id: 'p3-30',
      title: 'Money & Happiness',
      theme: 'Money',
      points: [
        'Can money buy happiness?',
        'How do people in your country feel about wealth?',
        'What are the disadvantages of being too focused on money?',
        'Has the meaning of success changed over time?',
        'How can we teach young people about the value of money?'
      ]
    }
  ],

  // ==========================================
  // TIPS CONTENT
  // ==========================================
  tips: {
    part1: [
      { title: 'Duration', content: 'Answer each question in 20-30 seconds. Part 1 lasts about 4-5 minutes total.' },
      { title: 'Be Natural', content: 'Don\'t memorize scripted answers. Speak naturally and conversationally.' },
      { title: 'Expand Your Answers', content: 'Add reasons, examples, and details to every answer. Never give one-word answers.' },
      { title: 'Fluency First', content: 'Don\'t worry about perfect grammar. Speak smoothly and at a natural pace.' },
      { title: 'Link Your Ideas', content: 'Use linking words: "because", "for example", "actually", "in fact", "as a result"' },
      { title: 'Avoid Repetition', content: 'Don\'t repeat the same vocabulary or phrases. Show range.' },
      { title: 'Stay Relevant', content: 'Answer exactly what was asked. Don\'t go off topic.' },
      { title: 'Paraphrase', content: 'You can repeat or rephrase the question in your answer naturally.' }
    ],
    part2: [
      { title: 'Use All Four Points', content: 'Cover every bullet point in the cue card. They are your roadmap.' },
      { title: 'Structure: Past-Present-Future', content: 'Organize your talk: background, details, feelings, future relevance.' },
      { title: '1-2 Minute Target', content: 'Aim for 1.5-2 minutes of speaking. Use the 1-minute prep time wisely.' },
      { title: 'Note Key Words', content: 'Write 3-4 keywords during prep time to guide your talk, not full sentences.' },
      { title: 'Hook Your Listener', content: 'Start with a clear opening sentence about the topic.' },
      { title: 'Develop Your Ideas', content: 'Add specific examples, feelings, and reasons to each point.' },
      { title: 'Use Descriptive Language', content: 'Include adjectives, specific details, and vivid descriptions.' },
      { title: 'Signal Transitions', content: 'Use "First of all...", "Another thing...", "Finally..." to organize.' },
      { title: 'End Clearly', content: 'Wrap up naturally. You don\'t need to artificially end if time runs out.' }
    ],
    part3: [
      { title: 'Think Deeper', content: 'Part 3 requires analysis, not just description. Discuss causes, effects, opinions.' },
      { title: 'Use Complex Structures', content: 'Show range: conditionals, passive voice, relative clauses, passive.' },
      { title: 'Give Balanced Views', content: 'Discuss multiple perspectives: advantages and disadvantages, different opinions.' },
      { title: 'Specific Examples', content: 'Support your points with real examples from your country or experience.' },
      { title: 'Speculate', content: 'Use hypothetical language: "If..., people might..., it could be argued that..."' },
      { title: 'Academic Vocabulary', content: 'Use topic-related vocabulary naturally: society, culture, environment, economy.' },
      { title: 'Extended Discourse', content: 'Part 3 answers should be longer and more developed than Part 1.' },
      { title: 'Engage with the Examiner', content: 'Treat it as a real discussion. Respond to what the examiner says.' }
    ],
    bandScore: [
      {
        band: '9',
        desc: 'Fully flexible in using complex structures. Only random errors. Natural and fully appropriate register. Excellent fluency. Sophisticated vocabulary. All sounds clear.'
      },
      {
        band: '8',
        desc: 'Rarely searches for words. Uses complex structures flexibly. Occasional slight inaccuracies. Good examples. Smooth transitions. Professional command.'
      },
      {
        band: '7',
        desc: 'Links ideas effectively. Good range of vocabulary. Generally good control of grammar. Occasional errors. Pronunciation clear throughout.'
      },
      {
        band: '6',
        desc: 'Speaks at length without much hesitation. Uses some complex forms. Some errors. Vocabulary for most topics. Pronunciation generally clear.'
      },
      {
        band: '5',
        desc: 'Can keep going but rephrases and repeats. Basic grammatical structures used. Limited vocabulary range. Some pronunciation errors.'
      }
    ],
    phrases: [
      {
        category: 'Linking Ideas',
        examples: [
          { text: '<em>On one hand</em>... <em>on the other hand</em>...' },
          { text: '<em>In addition to</em> this, ...' },
          { text: '<em>As a result</em> of this, ...' },
          { text: '<em>Having said that</em>, ...' },
          { text: '<em>Taking everything into account</em>, ...' }
        ]
      },
      {
        category: 'Giving Opinions',
        examples: [
          { text: 'I\'m inclined to believe that...' },
          { text: '<em>In my view</em>, the main reason is...' },
          { text: '<em>As far as I\'m concerned</em>, ...' },
          { text: 'I would argue that...' },
          { text: 'From my perspective, ...' }
        ]
      },
      {
        category: 'Speculating',
        examples: [
          { text: 'It\'s possible that <em>in the future</em>...' },
          { text: 'If this trend continues, <em>we might see</em>...' },
          { text: 'One could argue that...' },
          { text: '<em>It stands to reason</em> that...' },
          { text: 'This could well lead to...' }
        ]
      },
      {
        category: 'Describing Experiences',
        examples: [
          { text: '<em>As far as I can remember</em>, ...' },
          { text: '<em>What I found particularly interesting was</em>...' },
          { text: '<em>Looking back on it now</em>, I think...' },
          { text: '<em>To the best of my knowledge</em>, ...' },
          { text: 'I\'ll never forget the time when...' }
        ]
      },
      {
        category: 'Adding Emphasis',
        examples: [
          { text: '<em>Needless to say</em>, ...' },
          { text: '<em>It goes without saying</em> that...' },
          { text: '<em>What I mean is</em>, ...' },
          { text: '<em>The point I\'m making is</em>...' },
          { text: '<em>By and large</em>, ...' }
        ]
      },
      {
        category: 'Time & Sequence',
        examples: [
          { text: '<em>First of all</em>, ... <em>Secondly</em>, ... <em>Finally</em>, ...' },
          { text: '<em>At the time</em>, I thought...' },
          { text: '<em>Ever since then</em>, ...' },
          { text: '<em>Prior to that</em>, ...' },
          { text: '<em>To begin with</em>, ... <em>Moving on</em>, ...' }
        ]
      }
    ]
  }
};

// ==========================================
// MODEL ANSWERS (Band 7+ Examples)
// ==========================================
const MODEL_ANSWERS = {

  // Card: A Competition You Would Like to Take Part In (p2-01)
  'p2-01': {
    answer: '<p>I\'d like to talk about a <mark>marathon</mark> that I\'ve always dreamed of taking part in — the <mark>Berlin Marathon</mark>. It\'s one of the world\'s most prestigious <mark>athletic events</mark>, and I first learned about it a few years ago when I saw a documentary about elite runners breaking world records there.</p><p>The race is held annually in September in the heart of Berlin, passing by famous <mark>landmarks</mark> like the Brandenburg Gate and the TV Tower. It attracts over 40,000 runners from all over the globe.</p><p>If I were to prepare, I\'d start a <mark>rigorous training regimen</mark> at least six months in advance. I\'d gradually increase my mileage, work with a running coach, and focus on building my <mark>stamina and endurance</mark>. I\'d also pay close attention to my diet and ensure I\'m getting enough protein and <mark>complex carbohydrates</mark>.</p><p>The reason I\'d love to take part is quite personal. Running has always been my <mark>go-to stress reliever</mark>, and completing a marathon would represent the ultimate <mark>personal achievement</mark> for me. There\'s something incredibly <mark>fulfilling</mark> about pushing yourself to the limit and crossing that finish line.</p>',
    vocab: [
      { word: 'marathon', meaning: 'a long-distance running race of 42.195 km' },
      { word: 'athletic events', meaning: 'sports competitions, especially track and field' },
      { word: 'landmarks', meaning: 'well-known features of a place' },
      { word: 'rigorous training regimen', meaning: 'a strict and demanding exercise plan' },
      { word: 'stamina and endurance', meaning: 'the ability to sustain effort over time' },
      { word: 'complex carbohydrates', meaning: 'healthy starches that provide sustained energy' },
      { word: 'go-to stress reliever', meaning: 'the usual method someone uses to relax' },
      { word: 'personal achievement', meaning: 'a goal accomplished through personal effort' },
      { word: 'fulfilling', meaning: 'giving a sense of satisfaction and purpose' }
    ],
    tips: [
      'Structure your answer using the 4 bullet points from the cue card',
      'Use past, present, and future tenses naturally throughout',
      'Add specific details (names, dates, places) to make your answer more vivid',
      'Use linking phrases: "I\'d like to talk about...", "The reason...", "What\'s more..."'
    ]
  },

  // Card: A Small Business You Would Like to Open (p2-02)
  'p2-02': {
    answer: '<p>Well, the small business I\'d love to open someday is a <mark>cozy caf\u00e9</mark> in my hometown. It\'s something I\'ve been <mark>dreaming about</mark> for a while now, and I\'ve even started making notes about it in my journal.</p><p>The business would be a <mark>traditional coffee shop</mark> with a modern twist — serving locally roasted coffee, homemade pastries, and <mark>artisanal sandwiches</mark>. I envision a warm, inviting space with wooden furniture, soft lighting, and perhaps a small <mark>bookshelf corner</mark> where customers can <mark>browse and read</mark> while enjoying their drinks.</p><p>To prepare, I\'d first save up enough capital, then spend some time <mark>job-shadowing</mark> at a successful caf\u00e9 to learn the <mark>ins and outs</mark> of the business. I\'d also take a short course in food safety and <mark>business management</mark>.</p><p>As for whether I\'d work alone or hire employees, I think I\'d start by myself with maybe one or two staff members. Running a caf\u00e9 involves so many <mark>day-to-day tasks</mark> — from brewing coffee to managing inventory — that it would be <mark>unrealistic</mark> to do everything on my own from day one. Plus, I believe in creating <mark>job opportunities</mark> in my community.</p><p>Ultimately, opening this caf\u00e9 would give me a sense of <mark>independence and autonomy</mark> that I\'ve always craved, and I think it would be incredibly <mark>rewarding</mark> to build something from the ground up.</p>',
    vocab: [
      { word: 'cozy caf\u00e9', meaning: 'a small, comfortable coffee shop with a warm atmosphere' },
      { word: 'dreaming about', meaning: 'having long-term aspirations or wishes' },
      { word: 'artisanal sandwiches', meaning: 'handcrafted sandwiches made with quality ingredients' },
      { word: 'job-shadowing', meaning: 'observing and learning from an experienced worker' },
      { word: 'ins and outs', meaning: 'the detailed knowledge of how something works' },
      { word: 'business management', meaning: 'the process of organizing and overseeing a business' },
      { word: 'day-to-day tasks', meaning: 'routine activities performed regularly' },
      { word: 'unrealistic', meaning: 'not possible or practical in reality' },
      { word: 'independence and autonomy', meaning: 'freedom to make your own decisions' },
      { word: 'rewarding', meaning: 'providing satisfaction or benefit' }
    ],
    tips: [
      'Describe what your business would look and feel like in detail',
      'Explain the practical steps you\'d take to prepare',
      'Use the future tense ("I would", "I\'d like to") naturally',
      'Include why this business idea appeals to you personally'
    ]
  },

  // Card: A Film That Made You Laugh a Lot (p2-07)
  'p2-07': {
    answer: '<p>One film that had me <mark>laughing out loud</mark> from start to finish is "The Grand Budapest Hotel" directed by Wes Anderson. I watched it about two years ago with my roommate on a <mark>lazy Sunday afternoon</mark>, and it honestly lifted my spirits for days afterward.</p><p>The film is a <mark>whimsical comedy</mark> set in a fictional European country during the 1930s. It follows the story of a <mark>legendary concierge</mark> named Gustave H and his loyal <mark>prot\u00e9g\u00e9</mark>, Zero, as they navigate <mark>theft, imprisonment, and romance</mark> while trying to recover a priceless painting.</p><p>What made it so <mark>hysterically funny</mark> was Anderson\'s unique visual style — the perfectly <mark>symmetrical compositions</mark>, the pastel color palette, and the deadpan delivery of <mark>witty dialogue</mark>. For instance, Gustave\'s over-the-top devotion to the elderly <mark>High Society women</mark> he serves is both <mark>absurd and endearing</mark>. There\'s also a scene involving a <mark>reckless car chase</mark> through snowy mountains that had us both in <mark>stitches</mark>.</p><p>The reason it still makes me smile when I think about it is that it\'s the kind of film that <mark>brightens your mood</mark> no matter how <mark>gloomy</mark> you\'re feeling. It\'s a <mark>masterpiece of comedy</mark> that proves cinema can be both <mark>artistically sophisticated</mark> and genuinely hilarious.</p>',
    vocab: [
      { word: 'laughing out loud (LOL)', meaning: 'laughing in a loud, uncontrolled way' },
      { word: 'lazy Sunday afternoon', meaning: 'a relaxed, unhurried Sunday' },
      { word: 'whimsical comedy', meaning: 'a funny film with imaginative and playful elements' },
      { word: 'legendary concierge', meaning: 'a famous hotel manager who assists guests' },
      { word: 'prot\u00e9g\u00e9', meaning: 'a person guided and supported by an older, experienced mentor' },
      { word: 'hysterically funny', meaning: 'extremely funny, causing uncontrolled laughter' },
      { word: 'symmetrical compositions', meaning: 'evenly balanced visual arrangements' },
      { word: 'witty dialogue', meaning: 'clever and humorous conversation' },
      { word: 'High Society women', meaning: 'wealthy, upper-class women' },
      { word: 'in stitches', meaning: 'laughing uncontrollably' }
    ],
    tips: [
      'Name the film, director, and when/where you watched it',
      'Describe specific scenes that made you laugh — this brings the answer to life',
      'Use varied past tense: "had me laughing", "was set in", "followed the story of"',
      'Explain WHY it made you laugh, not just that it was funny'
    ]
  },

  // Card: A Person You Follow on Social Media (p2-17)
  'p2-17': {
    answer: '<p>The person I follow on social media who really stands out is a <mark>travel photographer</mark> named Sarah James. I discovered her about a year ago when I was <mark>browsing through Instagram</mark> looking for <mark>travel inspiration</mark>.</p><p>Sarah is based in Australia but she\'s constantly on the move, visiting <mark>breathtaking destinations</mark> across all seven continents. On her account, she shares <mark>stunning landscape photographs</mark>, <mark>behind-the-scenes footage</mark> of how she captures those shots, and honest <mark>reflections on the challenges of constant travel</mark> — like <mark>jet lag, language barriers</mark>, and being away from family.</p><p>What makes her content different from other travel influencers is that she doesn\'t just post <mark>glossy, filtered photos</mark>. She\'s remarkably <mark>candid</mark> about the <mark>ups and downs</mark> of the digital nomad lifestyle. She also runs <mark>photography workshops</mark> and sells presets that help amateur photographers <mark>enhance their own shots</mark>.</p><p>I follow her because her content is both <mark>visually inspiring</mark> and genuinely <mark>educational</mark>. Every time I look at her posts, I feel <mark>motivated to explore new places</mark> and learn more about photography. She\'s essentially become both a <mark>source of inspiration</mark> and a kind of <mark>informal mentor</mark> for me.</p>',
    vocab: [
      { word: 'travel photographer', meaning: 'a photographer who specializes in capturing images of different places' },
      { word: 'browsing through Instagram', meaning: 'casually looking at posts on Instagram' },
      { word: 'travel inspiration', meaning: 'ideas and motivation for travel destinations' },
      { word: 'breathtaking destinations', meaning: 'places so beautiful they take your breath away' },
      { word: 'behind-the-scenes footage', meaning: 'videos showing how something is done' },
      { word: 'jet lag, language barriers', meaning: 'common challenges of frequent international travel' },
      { word: 'glossy, filtered photos', meaning: 'overly polished, artificial-looking images' },
      { word: 'candid', meaning: 'honest and open, not pretentious' },
      { word: 'ups and downs', meaning: 'both the good and bad experiences' },
      { word: 'informal mentor', meaning: 'someone who guides you without being officially your teacher' }
    ],
    tips: [
      'Give specific details about the person — what they do, where they\'re from',
      'Describe the type of content they share and how often',
      'Explain why they\'re different from others in the same space',
      'Be personal — explain what this person means to you and how they\'ve influenced you'
    ]
  },

  // Card: A Skill That Is Important in Life (p2-21)
  'p2-21': {
    answer: '<p>The skill I believe is most important in life is <mark>effective communication</mark>. It\'s something I\'ve come to appreciate more and more as I\'ve grown older, and I think it\'s the foundation of almost everything we do — from building <mark>personal relationships</mark> to <mark>succeeding in careers</mark>.</p><p>I first realized how crucial it was during my university years when I had to <mark>lead a group project</mark>. I noticed that the groups with the best <mark>communication channels</mark> — where everyone felt heard and <mark>ideas were freely exchanged</mark> — consistently produced <mark>superior results</mark>, whereas groups with poor communication <mark>struggled to stay on track</mark>.</p><p>Effective communication isn\'t just about speaking clearly. It\'s also about <mark>active listening</mark> — truly paying attention to what someone says rather than just waiting for your turn to speak. It\'s about <mark>reading body language</mark>, adapting your language to your audience, and knowing when to <mark>speak and when to stay silent</mark>.</p><p>Since realizing this, I\'ve actively worked on improving — I joined a <mark>public speaking club</mark>, started reading more to <mark>expand my vocabulary</mark>, and made a conscious effort to be a better listener. These small steps have already made a <mark>noticeable difference</mark> in both my personal and professional life.</p><p>Ultimately, I believe that anyone who masters <mark>clear and empathetic communication</mark> will find it much easier to <mark>navigate the complexities of modern life</mark>.</p>',
    vocab: [
      { word: 'effective communication', meaning: 'the ability to convey and receive information clearly' },
      { word: 'personal relationships', meaning: 'connections with family, friends, and partners' },
      { word: 'succeeding in careers', meaning: 'achieving goals and advancing professionally' },
      { word: 'lead a group project', meaning: 'organize and direct a collaborative assignment' },
      { word: 'communication channels', meaning: 'methods through which information is shared' },
      { word: 'ideas were freely exchanged', meaning: 'people shared thoughts openly without fear' },
      { word: 'superior results', meaning: 'better quality outcomes' },
      { word: 'active listening', meaning: 'fully concentrating on what someone says' },
      { word: 'public speaking club', meaning: 'an organization that helps people practice presenting' },
      { word: 'navigate the complexities', meaning: 'deal with the challenges and difficulties' }
    ],
    tips: [
      'Choose a skill that is genuinely universal and important, not just niche',
      'Give a specific example of when you realized the importance of this skill',
      'Break down what the skill actually involves — don\'t just say "communication"',
      'Describe concrete steps you\'ve taken to improve this skill'
    ]
  },

  // Card: A Historic Place You Have Been To (p2-30)
  'p2-30': {
    answer: '<p>One historic place that left a <mark>deep impression</mark> on me was Angkor Wat in Cambodia. I visited it about three years ago during a <mark>solo backpacking trip</mark> through Southeast Asia, and it completely <mark>took my breath away</mark>.</p><p>Angkor Wat is a <mark>massive temple complex</mark> built in the 12th century as a <mark>Hindu temple</mark> dedicated to the god Vishnu. It was later converted to a Buddhist temple. Covering an area of over 160 hectares, it\'s the largest <mark>religious monument</mark> in the world. The intricate <mark>carvings and bas-reliefs</mark> on its walls depict scenes from <mark>Hindu mythology</mark> and historical events, and they\'re incredibly well preserved.</p><p>I spent a whole day exploring — waking up at 4 AM to see the <mark>sunrise over the temple</mark>, wandering through the <mark>shadowy corridors</mark>, and marveling at the famous <mark>\"Smile of Bayon\"</mark> carved into hundreds of stone faces. What struck me most was the sheer <mark>scale and precision</mark> of the construction, especially considering it was built <mark>without modern machinery</mark>.</p><p>I think Angkor Wat is incredibly important because it\'s not just a <mark>testament to human ingenuity</mark> and artistic achievement, but also a powerful symbol of Cambodia\'s <mark>cultural identity</mark> and <mark>historical resilience</mark>. Standing there, I felt a genuine sense of <mark>awe and reverence</mark> — like I was connected to something far greater than myself.</p>',
    vocab: [
      { word: 'deep impression', meaning: 'a strong and lasting effect on someone\'s feelings' },
      { word: 'solo backpacking trip', meaning: 'traveling alone with a backpack' },
      { word: 'took my breath away', meaning: 'made me feel strong emotion, especially awe' },
      { word: 'massive temple complex', meaning: 'a large group of connected religious buildings' },
      { word: 'Hindu temple', meaning: 'a place of worship for the Hindu religion' },
      { word: 'religious monument', meaning: 'a structure built for religious significance' },
      { word: 'carvings and bas-reliefs', meaning: 'decorative sculptures carved into stone surfaces' },
      { word: 'Hindu mythology', meaning: 'stories and legends from the Hindu religion' },
      { word: 'testament to human ingenuity', meaning: 'proof of human creativity and cleverness' },
      { word: 'awe and reverence', meaning: 'feelings of great respect and wonder' }
    ],
    tips: [
      'Give historical facts — when it was built, who built it, and why',
      'Describe specific things you saw and did at the location',
      'Use sensory language — describe what you saw, heard, and felt',
      'End by explaining why this place is historically or culturally significant'
    ]
  },

  // Card: A Festival Important in Your Country (p2-34)
  'p2-34': {
    answer: '<p>One festival that holds special significance in my country is <mark>Eid al-Fitr</mark>, which marks the end of Ramadan — the Islamic holy month of fasting. It\'s undoubtedly the most <mark>cherished celebration</mark> in my culture, and I always look forward to it with great excitement.</p><p>On the morning of Eid, we wake up early, put on our best clothes, and head to the <mark>communal prayer grounds</mark> for a special prayer service. After that, families visit each other\'s homes for a tradition called <mark>\"open house\"</mark> — where relatives, friends, and even neighbors are warmly welcomed with <mark>traditional dishes</mark> and sweets. One of my favorite treats is <mark>special cookies</mark> that my grandmother has been making for generations.</p><p>What makes this festival so important to me goes beyond the <mark>festivities and food</mark>. It\'s a time for <mark>reflection and gratitude</mark> — after a month of fasting and self-discipline, there\'s a profound sense of <mark>spiritual renewal</mark>. I also love the way it brings people together. During the <mark> Eid holidays</mark>, which usually last three days, the atmosphere is incredibly <mark>warm and joyful</mark>.</p><p>There\'s also a strong <mark>charitable aspect</mark> to Eid. Families who can afford it are expected to give <mark>\"zakat al-fitr\"</mark> — a small amount of money or food — to those in need, so that everyone can celebrate. I think this <mark>spirit of generosity and community</mark> is what makes the festival truly meaningful.</p>',
    vocab: [
      { word: 'Eid al-Fitr', meaning: 'the Muslim festival celebrating the end of Ramadan' },
      { word: 'cherished celebration', meaning: 'a much-loved and valued festival' },
      { word: 'communal prayer grounds', meaning: 'a shared area where people worship together' },
      { word: 'open house', meaning: 'a tradition of welcoming visitors to one\'s home' },
      { word: 'traditional dishes', meaning: 'foods that are typical of a particular culture' },
      { word: 'reflection and gratitude', meaning: 'thinking carefully and feeling thankful' },
      { word: 'spiritual renewal', meaning: 'a refreshed sense of inner peace and purpose' },
      { word: 'charitable aspect', meaning: 'the part of something related to helping others' },
      { word: 'spirit of generosity', meaning: 'the attitude of giving freely and kindly' }
    ],
    tips: [
      'Name the festival and explain when and why it is celebrated',
      'Describe specific traditions and activities (foods, prayers, customs)',
      'Include sensory details — what you see, smell, taste, and feel',
      'Explain the deeper meaning — what values does this festival represent?'
    ]
  },

  // Card: A Song Important to You (p2-26)
  'p2-26': {
    answer: '<p>A song that holds special meaning for me is <mark>\"Fix You\" by Coldplay</mark>. It\'s been one of my <mark>go-to songs</mark> for years, ever since I first heard it during a particularly <mark>challenging period</mark> in my life about four years ago.</p><p>The song is a <mark>powerful ballad</mark> with a simple but <mark>emotionally resonant</mark> melody. The lyrics are about offering <mark>comfort and support</mark> to someone who\'s going through a difficult time — phrases like <mark>\"when you try your best but you don\'t succeed\"</mark> and <mark>\"when you get confused, remember to take it right and easy\"</mark> have always struck a chord with me.</p><p>I first heard it when I was dealing with some <mark>academic setbacks</mark> and was feeling quite <mark>discouraged and lost</mark>. My best friend sent me the song with a short message saying she thought of me, and it immediately made me feel <mark>seen and supported</mark>. The gentle <mark>electric guitar</mark> and Chris Martin\'s <mark>soothing vocals</mark> create a sense of <mark>warmth and reassurance</mark> that\'s hard to put into words.</p><p>Since then, it\'s become my <mark>personal anthem for resilience</mark>. Whenever I\'m going through a tough time, I put on this song and it helps me <mark>put things in perspective</mark>. It reminds me that <mark>healing takes time</mark> and that it\'s okay to <mark>struggle and be vulnerable</mark>. The song is essentially a <mark>musical hug</mark>, and I don\'t think I\'ll ever tire of it.</p>',
    vocab: [
      { word: 'go-to songs', meaning: 'the songs someone returns to repeatedly' },
      { word: 'challenging period', meaning: 'a difficult time in one\'s life' },
      { word: 'powerful ballad', meaning: 'an emotional slow song with a strong impact' },
      { word: 'emotionally resonant', meaning: 'touching deep feelings effectively' },
      { word: 'struck a chord with me', meaning: 'made me feel a strong emotional connection' },
      { word: 'academic setbacks', meaning: 'difficulties or failures in education' },
      { word: 'discouraged and lost', meaning: 'feeling hopeless and without direction' },
      { word: 'soothing vocals', meaning: 'calming and pleasant singing' },
      { word: 'put things in perspective', meaning: 'see a situation clearly and realistically' },
      { word: 'musical hug', meaning: 'a comforting and emotionally supportive song' }
    ],
    tips: [
      'Name the song and the artist, and explain when/where you first heard it',
      'Describe the song\'s melody, lyrics, or musical elements that stand out',
      'Tell a personal story about why this song matters to you',
      'Use descriptive language about sounds and emotions'
    ]
  },

  // Card: An Interesting House or Apartment You Have Visited (p2-03)
  'p2-03': {
    answer: '<p>One of the most fascinating houses I\'ve ever visited was my uncle\'s <mark>eco-friendly home</mark> in the countryside about two hours from where I live. He built it himself over a period of three years, and I remember visiting shortly after he finished it when I was about fifteen years old.</p><p>The house is absolutely <mark>stunning</mark> — a two-story structure with large <mark>floor-to-ceiling windows</mark> that let in natural light throughout the day. What makes it unique is that it\'s built largely from <mark>sustainable materials</mark> like reclaimed wood and bamboo. The roof is covered with <mark>solar panels</mark> that provide most of the electricity, and there\'s a rainwater collection system for gardening. The interior has an <mark>open-plan design</mark> with a cozy fireplace in the living room and a <mark>sprawling garden</mark> at the back.</p><p>My uncle lives there with his wife and two dogs. They\'ve created a <mark>serene atmosphere</mark> with houseplants everywhere and <mark>handcrafted furniture</mark> they\'ve collected from their travels around Asia.</p><p>I found this house so interesting because it showed me that <mark>modern living and environmental responsibility</mark> can go hand in hand. It completely changed my perspective on what a home could be. Watching my uncle give tours to visitors and explain his <mark>green building techniques</mark> was truly <mark>eye-opening</mark>. It\'s safe to say this experience sparked my interest in <mark>sustainable architecture</mark>.</p>',
    vocab: [
      { word: 'eco-friendly home', meaning: 'a house designed to minimize environmental impact' },
      { word: 'stunning', meaning: 'extremely impressive or beautiful' },
      { word: 'floor-to-ceiling windows', meaning: 'windows that extend from floor to ceiling' },
      { word: 'sustainable materials', meaning: 'materials that can be replenished and don\'t harm the environment' },
      { word: 'solar panels', meaning: 'devices that convert sunlight into electricity' },
      { word: 'open-plan design', meaning: 'a layout where rooms flow into each other without walls' },
      { word: 'sprawling garden', meaning: 'a large, extensive garden area' },
      { word: 'serene atmosphere', meaning: 'a calm, peaceful environment' },
      { word: 'green building techniques', meaning: 'methods of construction that are environmentally friendly' },
      { word: 'eye-opening', meaning: 'providing new knowledge or understanding' }
    ],
    tips: [
      'Give specific details about what makes the house unique',
      'Describe the appearance, materials, and special features',
      'Explain who lives there and what the atmosphere is like',
      'Share why this particular house stood out to you'
    ]
  },

  // Card: A Place You Visited That Has Been Affected by Pollution (p2-04)
  'p2-04': {
    answer: '<p>The place that immediately comes to mind is <mark>Loktak Lake</mark> in my home state of Manipur, which I visited about three years ago. This lake was once known for its <mark>breathtaking natural beauty</mark> and was a crucial source of livelihood for local fishermen, but the pollution I witnessed there was truly <mark>heartbreaking</mark>.</p><p>I went there with my family during the winter months. The first thing I noticed was the <mark>thick layer of trash</mark> floating on parts of the water — plastic bottles, bags, and other <mark>debris that had accumulated</mark> over years. The water had a <mark>muddy, murky appearance</mark> and there was an unpleasant smell in certain areas.</p><p>The pollution here is mainly caused by <mark>industrial discharge</mark> from nearby factories, <mark>agricultural runoff</mark> containing pesticides, and sewage from nearby villages. There\'s also an invasive plant species called <mark>phumdis</mark> — floating islands of vegetation — that have grown extensively due to water pollution, disrupting the <mark>delicate ecosystem</mark>.</p><p>What really affected me was seeing how this had impacted the local communities. Fishermen who once <mark>relied on the lake</mark> for their daily catch now struggle to find enough fish. Migratory birds that used to visit have largely <mark>disappeared</mark>. The <mark>environmental degradation</mark> has not only harmed wildlife but also the traditional way of life for thousands of people. It was a powerful reminder of how <mark>human activities can devastate</mark> natural environments.</p>',
    vocab: [
      { word: 'breathtaking natural beauty', meaning: 'incredibly stunning scenery' },
      { word: 'heartbreaking', meaning: 'causing great sadness or disappointment' },
      { word: 'thick layer of trash', meaning: 'a substantial accumulation of waste' },
      { word: 'debris that had accumulated', meaning: 'waste that has gathered over time' },
      { word: 'muddy, murky appearance', meaning: 'cloudy and unclear water quality' },
      { word: 'industrial discharge', meaning: 'waste materials released by factories' },
      { word: 'agricultural runoff', meaning: 'water carrying pollutants from farms' },
      { word: 'delicate ecosystem', meaning: 'a balanced environment that is easily disrupted' },
      { word: 'relied on the lake', meaning: 'depended on the lake for survival' },
      { word: 'environmental degradation', meaning: 'the decline in environmental quality' }
    ],
    tips: [
      'Name the specific place and describe its pollution in detail',
      'Explain what type of pollution exists and how severe it is',
      'Describe the environmental impact on wildlife, plants, or people',
      'Share your personal reaction to seeing the pollution'
    ]
  },

  // Card: A Time When You Received Money as a Gift (p2-05)
  'p2-05': {
    answer: '<p>A memorable time when I received money as a gift was during my <mark>high school graduation ceremony</mark> five years ago. My grandparents, who had traveled from our hometown to attend the ceremony, presented me with an <mark>envelope containing a substantial amount of money</mark>.</p><p>My grandmother, who\'s always been <mark>incredibly generous</mark>, handed it to me with a warm smile and said it was to help me <mark>pursue my dreams</mark>. The amount was around 500 dollars — a significant sum by any measure. They had been saving for months to give me this gift, which made it even more <mark>meaningful and touching</mark>.</p><p>Initially, I felt a bit <mark>conflicted</mark>. I knew my grandparents weren\'t wealthy, and the money represented genuine <mark>sacrifice and hard work</mark> on their part. However, they insisted that I accept it as a token of their pride in my <mark>academic achievements</mark>.</p><p>I decided to use the money <mark>strategically</mark>. About half went toward buying a laptop for my university studies, which proved <mark>invaluable for my coursework</mark>. The rest I put into a savings account that I\'ve since used for various <mark>educational opportunities</mark> like language courses and certifications.</p><p>Looking back, receiving that money was about so much more than the <mark>financial value</mark>. It was a profound expression of <mark>love and belief in my potential</mark>. Every time I use that laptop, I\'m reminded of my grandparents\' <mark>unwavering support</mark> and the importance of working hard to honor their faith in me.</p>',
    vocab: [
      { word: 'high school graduation ceremony', meaning: 'the event marking the completion of secondary education' },
      { word: 'incredibly generous', meaning: 'giving freely and abundantly' },
      { word: 'pursue my dreams', meaning: 'work toward achieving one\'s aspirations' },
      { word: 'meaningful and touching', meaning: 'deeply significant and emotionally moving' },
      { word: 'conflicted', meaning: 'having mixed feelings or uncertainty' },
      { word: 'sacrifice and hard work', meaning: 'giving up something for a goal and effort put in' },
      { word: 'academic achievements', meaning: 'success in educational pursuits' },
      { word: 'invaluable for my coursework', meaning: 'extremely useful for my studies' },
      { word: 'unwavering support', meaning: 'constant and firm encouragement' }
    ],
    tips: [
      'Set the scene — explain when, where, and who gave you the money',
      'Describe how much you received and the context of the gift',
      'Share what you did with the money and why',
      'Express your feelings honestly about receiving money as a gift'
    ]
  },

  // Card: A Film That Made You Laugh a Lot (p2-06)
  'p2-06': {
    answer: '<p>The film that had me <mark>laughing uncontrollably</mark> more than any other is "Superbad" from 2007. I watched it with my college roommates during our <mark>first semester orientation week</mark>, and it quickly became our <mark>inside joke reference</mark> for everything.</p><p>It\'s a <mark>coming-of-age comedy</mark> starring Michael Cera, Jonah Hill, and Christopher Mintz-Plasse as three high school friends trying to <mark>make the most of their final weeks</mark> before graduation. The plot revolves around their attempts to <mark>throw the ultimate party</mark> and each character\'s awkward journey toward adulthood.</p><p>What made it so <mark>hysterically funny</mark> was the <mark>witty dialogue</mark> and the characters\' <mark>relatable awkwardness</mark>. Jonah Hill\'s character\'s <mark>relentless obsession</mark> with getting drunk before graduation and his <mark>botched attempts to look cool</mark> around his crush had us in tears. There\'s also a <mark>legendary scene</mark> involving a fake ID at a liquor store that still makes me chuckle whenever I think about it.</p><p>But beyond the laughs, what I really appreciated was how the film captured the <mark>excitement and anxiety</mark> of that <mark>transitional period</mark> in life. Watching it helped me process my own feelings about starting university. To this day, whenever I need a <mark>mood boost</mark>, I put on "Superbad" and it never fails to <mark>brighten my day</mark>.</p>',
    vocab: [
      { word: 'laughing uncontrollably', meaning: 'laughing without being able to stop' },
      { word: 'first semester orientation week', meaning: 'the introductory period at the start of university' },
      { word: 'inside joke reference', meaning: 'something funny that only insiders understand' },
      { word: 'coming-of-age comedy', meaning: 'a humorous film about growing up' },
      { word: 'make the most of their final weeks', meaning: 'enjoy the last time before a major change' },
      { word: 'relentless obsession', meaning: 'continuous and intense focus on something' },
      { word: 'botched attempts', meaning: 'failed tries at doing something' },
      { word: 'legendary scene', meaning: 'a famous, memorable moment in a film' },
      { word: 'relatable awkwardness', meaning: 'embarrassing situations that audiences understand' },
      { word: 'mood boost', meaning: 'an improvement in one\'s emotional state' }
    ],
    tips: [
      'Name the film and describe the genre and plot briefly',
      'Give specific examples of scenes that made you laugh',
      'Explain why the comedy worked — was it the dialogue, situations, or acting?',
      'Share the context of when you watched it and with whom'
    ]
  },

  // Card: A Time You Needed to Search for Information (p2-08)
  'p2-08': {
    answer: '<p>A time when I needed to search for information was when I was <mark>applying for graduate school</mark> about two years ago. I had to gather a significant amount of <mark>research and documentation</mark> to make sure my applications were as strong as possible.</p><p>The information I needed was quite varied. First, I had to research <mark>different universities and programs</mark> to find which ones aligned with my career goals. I also needed to understand the <mark>application requirements</mark> — things like minimum GPA scores, required test scores, <mark>recommendation letters</mark>, and application deadlines. Additionally, I was looking for information about <mark>scholarships and funding opportunities</mark> that I might be eligible for.</p><p>I primarily used the internet to search for this information. I started by <mark>browsing university websites</mark> and then moved on to <mark>student forums and social media groups</mark> where past and current students shared their experiences. I also reached out to <mark>academic advisors</mark> and professors for guidance. The most valuable resource turned out to be connecting with <mark>alumni</mark> who had already gone through the application process.</p><p>This research was absolutely <mark>crucial for my future</mark>. Without it, I would have missed important deadlines and been unaware of certain <mark>scholarship opportunities</mark> that have significantly reduced my tuition costs. The process also helped me <mark>clarify my career goals</mark> and make more informed decisions about which programs would best suit my needs.</p>',
    vocab: [
      { word: 'applying for graduate school', meaning: 'seeking admission to a university for advanced studies' },
      { word: 'research and documentation', meaning: 'collecting information and evidence' },
      { word: 'different universities and programs', meaning: 'various higher education institutions and courses' },
      { word: 'application requirements', meaning: 'the conditions needed to apply' },
      { word: 'recommendation letters', meaning: 'letters written by others supporting an application' },
      { word: 'scholarships and funding opportunities', meaning: 'financial aid for education' },
      { word: 'browsing university websites', meaning: 'exploring official university pages online' },
      { word: 'student forums and social media groups', meaning: 'online communities where students share information' },
      { word: 'alumni', meaning: 'former students of an institution' },
      { word: 'crucial for my future', meaning: 'extremely important for what lies ahead' }
    ],
    tips: [
      'Explain the specific situation that required research',
      'Describe what type of information you needed and why',
      'Detail where and how you searched for the information',
      'Share how the information you found helped you'
    ]
  },

  // Card: A Time You Spent with a Young Child (p2-09)
  'p2-09': {
    answer: '<p>One of the most delightful experiences I\'ve had was spending a day with my <mark>younger cousin Aisha</mark> when she was about five years old. This happened about three years ago during a <mark>family reunion</mark> at my grandmother\'s house in our hometown.</p><p>My aunt asked me to look after Aisha while the adults prepared for the reunion celebrations. We started by <mark>exploring the garden</mark> together, where she was absolutely <mark>fascinated by everything</mark> — from the butterflies fluttering around the flowers to the ants carrying food crumbs. I patiently answered her endless questions about nature, which seemed to <mark>amaze and excite her</mark>.</p><p>After that, we moved indoors and I taught her how to <mark>fold paper airplanes</mark>. This proved to be a brilliant decision because she was completely <mark>absorbed in the activity</mark>. We spent at least an hour folding different designs and then testing them in the hallway. Her <mark>infectious laughter</mark> and genuine <mark>enthusiasm</mark> when a plane flew particularly well was absolutely heartwarming.</p><p>What I took away from this experience was how <mark>refreshing and enlightening</mark> it can be to see the world through a child\'s eyes. Their <mark>curiosity and wonder</mark> about things we often take for granted is truly <mark>inspiring</mark>. It reminded me to <mark>appreciate the simple things</mark> in life and to never lose that sense of <mark>innocent curiosity</mark> that children naturally possess.</p>',
    vocab: [
      { word: 'younger cousin Aisha', meaning: 'a relative who is younger than you' },
      { word: 'family reunion', meaning: 'a gathering of extended family members' },
      { word: 'fascinated by everything', meaning: 'extremely interested in many things' },
      { word: 'amaze and excite her', meaning: 'cause strong feelings of wonder and enthusiasm' },
      { word: 'absorbed in the activity', meaning: 'completely focused on what they are doing' },
      { word: 'infectious laughter', meaning: 'laughter that makes others want to laugh too' },
      { word: 'enthusiasm', meaning: 'eager and keen interest' },
      { word: 'refreshing and enlightening', meaning: 'providing new energy and understanding' },
      { word: 'curiosity and wonder', meaning: 'a strong desire to learn and be amazed' },
      { word: 'innocent curiosity', meaning: 'natural desire to explore without preconceptions' }
    ],
    tips: [
      'Explain who the child was and your relationship to them',
      'Describe specific activities you did together',
      'Include the child\'s reactions and behaviors to make it vivid',
      'Share what you learned or how the experience affected you'
    ]
  },

  // Card: A Skill You Took a Long Time to Master (p2-10)
  'p2-10': {
    answer: '<p>The skill that took me the longest to master was <mark>playing the piano</mark>. It took me approximately <mark>six years of consistent practice</mark> before I could truly call myself a competent pianist, and honestly, I\'m still learning every day.</p><p>I started learning when I was eight years old at the insistence of my parents. My initial years were quite <mark>frustrating and challenging</mark>. I struggled with <mark>reading sheet music</mark>, coordinating both hands simultaneously, and developing the <mark>finger strength and dexterity</mark> required for more advanced pieces. There were many times when I felt like giving up, especially when I compared myself to other students who seemed to <mark>progress much faster</mark>.</p><p>What transformed my learning experience was when I found a <mark>patient and inspiring teacher</mark> who changed my approach to practice. Instead of just <mark>mechanical repetition</mark>, she taught me to <mark>understand the emotional context</mark> behind the music. She also introduced me to the <mark>Pomodoro technique</mark> — practicing in focused 25-minute sessions with short breaks — which dramatically improved my <mark>concentration and efficiency</mark>.</p><p>I decided to learn piano primarily because my mother is a <mark>music lover</mark> and dreamed of having a child who could play beautifully. But over time, it became my own passion. Mastering the piano has taught me <mark>discipline, patience, and the value of persistence</mark>. It\'s also become my <mark>go-to way to unwind</mark> after a stressful day, and I\'ve even performed at a few local concerts, which was incredibly <mark>fulfilling</mark>.</p>',
    vocab: [
      { word: 'playing the piano', meaning: 'the skill of producing music on a piano instrument' },
      { word: 'frustrating and challenging', meaning: 'causing difficulty and annoyance' },
      { word: 'reading sheet music', meaning: 'interpreting written musical notation' },
      { word: 'finger strength and dexterity', meaning: 'physical ability and skill of the fingers' },
      { word: 'patient and inspiring teacher', meaning: 'a tutor who is calm and motivating' },
      { word: 'mechanical repetition', meaning: 'mindless, routine practice without understanding' },
      { word: 'emotional context', meaning: 'the feelings and mood that music expresses' },
      { word: 'concentration and efficiency', meaning: 'focus and productivity during practice' },
      { word: 'music lover', meaning: 'someone who has a deep appreciation for music' },
      { word: 'go-to way to unwind', meaning: 'the usual method of relaxing' }
    ],
    tips: [
      'Name the specific skill and explain why it took long to master',
      'Describe the learning process and challenges you faced',
      'Share what helped you finally make progress',
      'Explain why you decided to learn this skill initially'
    ]
  },

  // Card: Being Friendly to Someone You Didnt Like (p2-11)
  'p2-11': {
    answer: '<p>There was a time when I had to be incredibly <mark>diplomatic and friendly</mark> toward a colleague I genuinely didn\'t get along with. This happened during my <mark>internship at a marketing firm</mark> about two years ago.</p><p>The person in question was someone named Raj, who worked in the same department as me. I didn\'t like him because he had a <mark>condescending attitude</mark> and would often <mark>take credit for other people\'s work</mark>. He also had a habit of <mark>interrupting others</mark> during meetings and being generally dismissive of junior staff members like myself.</p><p>The reason I had to be friendly despite my feelings was that we were assigned to <mark>work together on a major project</mark>. Our manager emphasized the importance of <mark>teamwork and professional conduct</mark>, and frankly, I couldn\'t afford to damage my reputation by being <mark>unprofessional</mark>. Additionally, Raj was <mark>well-connected</mark> in the company, and being on his bad side could have <mark>negative repercussions</mark> for my career.</p><p>I have to admit, it was genuinely <mark>challenging and draining</mark> to put on a friendly face. I had to constantly <mark>remind myself to stay calm</mark> and respond to his provocations with patience. However, I did learn a lot from the experience — it taught me about <mark>emotional intelligence and the ability to separate personal feelings from professional situations</mark>. In the end, we delivered the project successfully, and I believe the experience made me <mark>more resilient and mature</mark>.</p>',
    vocab: [
      { word: 'diplomatic and friendly', meaning: 'tactful and pleasant in social interactions' },
      { word: 'internship at a marketing firm', meaning: 'a temporary work position at a marketing company' },
      { word: 'condescending attitude', meaning: 'a manner that suggests one is superior to others' },
      { word: 'take credit for other people\'s work', meaning: 'claim ownership of achievements made by others' },
      { word: 'interrupting others', meaning: 'not allowing others to finish speaking' },
      { word: 'teamwork and professional conduct', meaning: 'working well together and behaving appropriately' },
      { word: 'unprofessional', meaning: 'not meeting the standards of a profession' },
      { word: 'well-connected', meaning: 'having useful relationships with important people' },
      { word: 'negative repercussions', meaning: 'unfavorable consequences' },
      { word: 'emotional intelligence', meaning: 'the ability to understand and manage emotions' }
    ],
    tips: [
      'Explain who the person was and why you didn\'t like them',
      'Describe why you had to be polite despite your feelings',
      'Share specific strategies you used to maintain professionalism',
      'Reflect on how the experience affected you'
    ]
  },

  // Card: A Foreign Country Culture You Would Like to Learn More About (p2-12)
  'p2-12': {
    answer: '<p>The foreign culture I\'d love to learn more about is <mark>Japanese culture</mark>, particularly its <mark>traditional arts and philosophy</mark>. This fascination began when I watched a documentary about <mark>Japanese gardens</mark> about four years ago, and it has only grown stronger since then.</p><p>I first learned about Japanese culture through various <mark>media channels</mark> — films like "Memoirs of a Geisha," documentaries on NHK, and of course, content on social media. I\'ve read a few books on the subject, including <mark>Haruki Murakami\'s novels</mark>, which give fascinating glimpses into modern Japanese life. I\'ve also followed several <mark>YouTube channels</mark> run by people living in Japan who share daily life insights.</p><p>What draws me to this culture is the concept of <mark>"wabi-sabi"</mark> — the idea of finding beauty in imperfection and transience. I\'m also fascinated by practices like <mark>tea ceremony, flower arrangement, and calligraphy</mark>, which emphasize <mark>mindfulness and attention to detail</mark>. The Japanese approach to <mark>craftsmanship and quality</mark>, where artisans spend decades perfecting a single skill, is something I find deeply inspiring.</p><p>In the future, I\'d love to learn the <mark>Japanese language</mark>, particularly so I can understand traditional literature in its original form. I also want to study <mark>Ikebana</mark>, the art of flower arrangement, and perhaps even visit Japan to experience the <mark>cherry blossom season</mark> firsthand. This culture represents a <mark>unique blend of tradition and modernity</mark> that I find endlessly fascinating.</p>',
    vocab: [
      { word: 'Japanese culture', meaning: 'the customs, arts, and traditions of Japan' },
      { word: 'traditional arts and philosophy', meaning: 'classical creative practices and ways of thinking' },
      { word: 'media channels', meaning: 'sources of information like TV, internet, and print' },
      { word: 'mindfulness and attention to detail', meaning: 'awareness and focus on small things' },
      { word: 'craftsmanship and quality', meaning: 'skill in making things and maintaining high standards' },
      { word: 'wabi-sabi', meaning: 'a worldview centered on accepting imperfection and transience' },
      { word: 'tea ceremony', meaning: 'a traditional Japanese ritual of preparing and serving tea' },
      { word: 'Ikebana', meaning: 'the Japanese art of flower arrangement' },
      { word: 'cherry blossom season', meaning: 'the annual period when cherry trees flower' },
      { word: 'unique blend of tradition and modernity', meaning: 'an interesting combination of old and new' }
    ],
    tips: [
      'Name the specific country or culture you want to learn about',
      'Explain how you first learned about it and what you know so far',
      'Describe what specifically interests you and why',
      'Share what specific things you\'d like to learn in the future'
    ]
  },

  // Card: A Time You Had to Be Polite (p2-13)
  'p2-13': {
    answer: '<p>A situation that required me to be extremely <mark>diplomatic and courteous</mark> was when I had to <mark>interview for my first professional job</mark> two years ago. The interviewer was a senior executive, and the entire atmosphere was quite <mark>intimidating and formal</mark>.</p><p>I was seated in a large office with <mark>panoramic windows</mark> overlooking the city. The interviewer, Mr. Sharma, was a <mark>well-respected figure</mark> in the industry with decades of experience. He had a reputation for being <mark>strict and demanding</mark>, and I could sense that he was evaluating not just my qualifications but also my <mark>character and demeanor</mark>.</p><p>Throughout the interview, I had to maintain a <mark>polite and respectful</mark> demeanor even when he asked challenging questions or put pressure on me. When he <mark>challenged my lack of experience</mark>, I had to politely explain my perspective without sounding <mark>defensive or arrogant</mark>. I made sure to use respectful language, maintain <mark>appropriate eye contact</mark>, and listen attentively before responding.</p><p>Honestly, it was <mark>nerve-wracking</mark>. Every word felt consequential, and I had to carefully consider how to <mark>phrase my responses</mark>. However, I\'m glad I handled it the way I did because the experience taught me the value of <mark>composure and grace under pressure</mark>. I did get the job, and Mr. Sharma later told me that my <mark>professional attitude</mark> during the interview had made a strong impression. This experience showed me that <mark>politeness and professionalism</mark> can genuinely open doors.</p>',
    vocab: [
      { word: 'diplomatic and courteous', meaning: 'tactful and polite in handling situations' },
      { word: 'interview for my first professional job', meaning: 'a meeting to determine if I would be hired' },
      { word: 'intimidating and formal', meaning: 'causing fear and being very proper and official' },
      { word: 'well-respected figure', meaning: 'someone who is highly regarded and admired' },
      { word: 'strict and demanding', meaning: 'having high standards and expecting excellence' },
      { word: 'challenged my lack of experience', meaning: 'questioned my insufficient background' },
      { word: 'defensive or arrogant', meaning: 'acting protectively or showing superiority' },
      { word: 'composure and grace under pressure', meaning: 'calmness and dignity in difficult situations' },
      { word: 'professional attitude', meaning: 'a behavior that shows skill and seriousness' },
      { word: 'politeness and professionalism', meaning: 'courtesy and proper business conduct' }
    ],
    tips: [
      'Set the scene — explain when and where this happened',
      'Describe who you were with and why politeness was required',
      'Share specific examples of how you demonstrated politeness',
      'Reflect on the outcome and how you felt about it'
    ]
  },

  // Card: An Adventure You Would Like to Go On (p2-14)
  'p2-14': {
    answer: '<p>The adventure I\'ve always dreamed of going on is a <mark>trekking expedition through the Himalayas</mark>, specifically the famous <mark>Annapurna Circuit trail</mark> in Nepal. It\'s something that has been at the top of my bucket list for years.</p><p>The Annapurna Circuit is approximately <mark>160 kilometers long</mark> and takes most trekkers about two to three weeks to complete. It passes through <mark>breathtaking mountain landscapes</mark>, traditional villages, and <mark>diverse ecosystems</mark> ranging from subtropical forests to alpine meadows. The trail also goes through <mark>high mountain passes</mark> including Thorong La at 5,416 meters, which offers <mark>unforgettable panoramic views</mark>.</p><p>If I were to go on this adventure, I would definitely go with my <mark>close friend Deepak</mark>, who is also an <mark>enthusiastic hiker and outdoor enthusiast</mark>. We\'ve been planning this trip together for the past year and have already started <mark>preparing physically</mark> by going on regular hikes and building our stamina.</p><p>The reason I\'m so drawn to this adventure is that it combines <mark>physical challenge, natural beauty, and cultural immersion</mark> in a way that few other experiences can match. I\'ve always felt <mark>drawn to mountains</mark> and the sense of <mark>accomplishment that comes from pushing your limits</mark>. Completing this trek would be a <mark>life-defining achievement</mark> for me, and I hope to make it happen within the next few years.</p>',
    vocab: [
      { word: 'trekking expedition', meaning: 'a long journey on foot through wild country' },
      { word: 'Annapurna Circuit trail', meaning: 'a famous long-distance hiking route in Nepal' },
      { word: 'breathtaking mountain landscapes', meaning: 'incredibly beautiful mountain scenery' },
      { word: 'diverse ecosystems', meaning: 'different natural environments with various wildlife' },
      { word: 'high mountain passes', meaning: 'routes through very high mountains' },
      { word: 'unforgettable panoramic views', meaning: 'amazing scenery that stretches across the horizon' },
      { word: 'outdoor enthusiast', meaning: 'someone who loves outdoor activities' },
      { word: 'building our stamina', meaning: 'increasing physical endurance through training' },
      { word: 'pushing your limits', meaning: 'testing the boundaries of your ability' },
      { word: 'life-defining achievement', meaning: 'an accomplishment that changes your life' }
    ],
    tips: [
      'Describe the specific adventure you want to go on',
      'Give details about the location and what it involves',
      'Explain who you would go with and why you want to do it',
      'Share why this adventure appeals to you personally'
    ]
  },

  // Card: A Time When You Felt Bored (p2-15)
  'p2-15': {
    answer: '<p>The most <mark>intensely boring experience</mark> I\'ve ever had was during a <mark>six-hour train journey</mark> across my country about a year ago. I was traveling alone to visit a relative, and the train was delayed significantly due to <mark>technical issues</mark>.</p><p>It started when the train came to a <mark>complete standstill</mark> in the middle of nowhere for about three hours. There was no air conditioning working properly, the <mark>seats were uncomfortable</mark>, and my phone had almost no signal. To make matters worse, I had forgotten to <mark>bring any entertainment</mark> — no books, no music, nothing.</p><p>I tried to make the most of it by <mark>staring out the window</mark> at the flat, unchanging landscape, but after the first hour, there was really nothing left to look at. I started <mark>counting the seconds</mark> on my watch just to have something to do. I even took a <mark>nap out of sheer boredom</mark>, only to wake up and find the train still not moving.</p><p>Initially, I felt <mark>frustrated and restless</mark>. Time seemed to move incredibly slowly, and every minute felt like an hour. Eventually, I struck up a conversation with an <mark>elderly gentleman</mark> sitting across from me, and we spent the remaining time <mark>sharing stories about our lives</mark>. This unexpected human connection actually made the experience <mark>somewhat worthwhile</mark>, and I learned some valuable lessons about <mark>patience and finding silver linings</mark> in unpleasant situations.</p>',
    vocab: [
      { word: 'intensely boring experience', meaning: 'a situation that caused extreme tedium' },
      { word: 'six-hour train journey', meaning: 'a long train ride lasting six hours' },
      { word: 'complete standstill', meaning: 'a complete stop with no movement' },
      { word: 'seats were uncomfortable', meaning: 'the seating was not pleasant or relaxing' },
      { word: 'bring any entertainment', meaning: 'failed to prepare things to pass the time' },
      { word: 'counting the seconds', meaning: 'watching time pass very slowly' },
      { word: 'frustrated and restless', meaning: 'annoyed and unable to stay still' },
      { word: 'elderly gentleman', meaning: 'an older man' },
      { word: 'silver linings', meaning: 'positive aspects of an otherwise negative situation' },
      { word: 'patience', meaning: 'the ability to wait calmly' }
    ],
    tips: [
      'Set the scene — explain when and where you were',
      'Describe who was with you and what you were doing',
      'Explain what made you feel bored and how you tried to cope',
      'Share how you eventually dealt with the situation'
    ]
  },

  // Card: An Article You Read About Health (p2-16)
  'p2-16': {
    answer: '<p>An article about health that left a <mark>lasting impression</mark> on me was a <mark>research piece about the effects of sleep deprivation</mark> on cognitive function and overall health. I read it about a year ago in a <mark>popular science magazine</mark> while waiting for an appointment.</p><p>The article discussed how <mark>chronic sleep deficiency</mark> — consistently getting less than the recommended 7-9 hours — can have <mark>devastating effects</mark> on the brain and body. It cited numerous studies showing links between poor sleep and <mark>increased risk of heart disease, obesity, diabetes, and mental health issues</mark>. The article also explained how sleep deprivation <mark>impairs decision-making, memory, and concentration</mark> — effects that accumulate over time.</p><p>I read this article because I had been experiencing <mark>persistent fatigue and difficulty concentrating</mark> and wanted to understand why. I found the research particularly <mark>eye-opening and alarming</mark>. One statistic that stuck with me was that after just one night of getting less than 6 hours of sleep, <mark>cognitive performance drops to the equivalent of being legally drunk</mark>.</p><p>What I learned from this article has <mark>completely transformed my habits</mark>. I now prioritize sleep much more seriously and have established a <mark>consistent bedtime routine</mark>. I\'ve also become an advocate for sleep health, frequently <mark>sharing this information with friends and family</mark> who struggle with similar issues. This single article has genuinely helped me <mark>improve my quality of life</mark> significantly.</p>',
    vocab: [
      { word: 'lasting impression', meaning: 'a strong and enduring effect' },
      { word: 'research piece', meaning: 'an article based on studies and evidence' },
      { word: 'effects of sleep deprivation', meaning: 'the negative impacts of not getting enough sleep' },
      { word: 'popular science magazine', meaning: 'a widely read publication about scientific topics' },
      { word: 'chronic sleep deficiency', meaning: 'long-term lack of sufficient sleep' },
      { word: 'devastating effects', meaning: 'extremely harmful consequences' },
      { word: 'cognitive performance', meaning: 'mental abilities like thinking and memory' },
      { word: 'persistent fatigue', meaning: 'ongoing tiredness that doesn\'t go away' },
      { word: 'eye-opening and alarming', meaning: 'shocking and revealing something surprising' },
      { word: 'consistent bedtime routine', meaning: 'a regular pattern of getting ready for sleep' }
    ],
    tips: [
      'Name the article and explain what topic it covered',
      'Describe where and why you read it',
      'Share the most interesting or surprising information you learned',
      'Explain how the article affected your behavior or thinking'
    ]
  },

  // Card: A Piece of Local Food That You Like (p2-18)
  'p2-18': {
    answer: '<p>One of my all-time favorite local dishes is <mark>"Biryani"</mark> — a fragrant, flavorful <mark>spiced rice dish</mark> cooked with meat, spices, and herbs. It\'s deeply <mark>rooted in our culinary tradition</mark> and is often served during celebrations and special occasions.</p><p>The place where I usually enjoy this dish is a <mark>family-owned restaurant</mark> near my home that has been operating for over forty years. The restaurant has a <mark>warm, inviting atmosphere</mark> with traditional decor, and the owners maintain <mark>authentic recipes passed down through generations</mark>. Every time I visit, I can smell the <mark>aroma of slow-cooked spices</mark> wafting from the kitchen.</p><p>I first tried Biryani when I was about eight years old at my grandmother\'s house during a <mark>family wedding celebration</mark>. My grandmother was an <mark>exceptional cook</mark>, and she had prepared a massive pot herself. From that very first bite, I was completely <mark>hooked on the complex blend of flavors</mark> — the tender meat, the aromatic rice, the perfect balance of spices.</p><p>What I love most about Biryani is how it <mark>represents our culture\'s love for food</mark> and hospitality. It\'s not just a dish — it\'s a <mark>sensory experience</mark> that brings back memories of <mark>family gatherings and festive celebrations</mark>. Every bite tells a story of <mark>centuries-old traditions</mark> and the artistry of Indian cooking. It\'s truly a <mark>culinary masterpiece</mark> that I will never tire of.</p>',
    vocab: [
      { word: 'Biryani', meaning: 'a spiced rice dish with meat, popular in South Asia' },
      { word: 'spiced rice dish', meaning: 'rice cooked with various spices and often meat' },
      { word: 'rooted in our culinary tradition', meaning: 'deeply connected to our food culture' },
      { word: 'family-owned restaurant', meaning: 'a restaurant owned and run by a family' },
      { word: 'authentic recipes passed down', meaning: 'original cooking methods inherited from ancestors' },
      { word: 'slow-cooked spices', meaning: 'spices prepared over a long time with low heat' },
      { word: 'hooked on the complex blend of flavors', meaning: 'very fond of the intricate taste combination' },
      { word: 'sensory experience', meaning: 'something that appeals to the senses' },
      { word: 'culinary masterpiece', meaning: 'an outstanding example of cooking' },
      { word: 'centuries-old traditions', meaning: 'customs that have existed for hundreds of years' }
    ],
    tips: [
      'Name the specific dish and describe what it looks and tastes like',
      'Explain where you usually eat it and why that place is special',
      'Share when you first tried it and what made that moment memorable',
      'Describe why you love this food — its taste, cultural significance, or memories'
    ]
  },

  // Card: Teaching Someone Something New (p2-19)
  'p2-19': {
    answer: '<p>A memorable experience of teaching someone something new was when I <mark>taught my mother how to use a smartphone</mark> about three years ago. She had always been <mark>intimidated by technology</mark> and had relied on her basic phone for years.</p><p>The teaching happened at my parents\' home over a <mark>weekend</mark>. My mother was turning sixty and had finally agreed to upgrade to a smartphone after seeing how much my father enjoyed his. I started by showing her the <mark>most basic functions</mark> — how to make calls, send text messages, and navigate the home screen.</p><p>I quickly realized that teaching was <mark>much harder than I expected</mark>. I had to be incredibly <mark>patient and break everything down</mark> into tiny steps. For instance, showing her how to take a photo required explaining the camera app, how to <mark>aim and tap the button</mark>, and then how to view the photo afterward. I used <mark>analogies and visual aids</mark> to help her understand — like comparing the touch screen to touching a button on a physical device.</p><p>Her reactions were <mark>absolutely precious</mark>. When she successfully sent her first text message, she was so <mark>proud and excited</mark> that she immediately wanted to show everyone in the family. By the end of the weekend, she could use <mark>voice calls, video calls, and basic apps</mark> with confidence. Teaching her gave me a <mark>whole new appreciation for patience and the satisfaction of sharing knowledge</mark>.</p>',
    vocab: [
      { word: 'taught my mother how to use a smartphone', meaning: 'helped my mother learn to operate a modern mobile phone' },
      { word: 'intimidated by technology', meaning: 'feeling nervous or afraid of using technical devices' },
      { word: 'most basic functions', meaning: 'the simplest operations of a device' },
      { word: 'break everything down', meaning: 'divide complex tasks into simpler parts' },
      { word: 'aim and tap the button', meaning: 'position and touch the screen to take action' },
      { word: 'analogies and visual aids', meaning: 'comparisons and pictures that help explain things' },
      { word: 'absolutely precious', meaning: 'extremely wonderful or touching' },
      { word: 'proud and excited', meaning: 'feeling happy about an achievement' },
      { word: 'voice calls, video calls, and basic apps', meaning: 'communication and application features' },
      { word: 'sharing knowledge', meaning: 'passing on information to others' }
    ],
    tips: [
      'Explain who you taught and what new skill they learned',
      'Describe how you went about teaching — methods, patience required',
      'Share specific examples of what you taught and how they learned',
      'Describe their reaction and what the experience taught you'
    ]
  },

  // Card: A Skill That Is Important in Life (p2-20)
  'p2-20': {
    answer: '<p>The life skill I consider absolutely essential is <mark>time management</mark>. It\'s the ability that has made the biggest difference in my <mark>personal and academic life</mark>, and I\'m convinced it\'s one of the most <mark>transferable and valuable skills</mark> anyone can develop.</p><p>I first recognized the importance of time management during my <mark>undergraduate years</mark> when I had to juggle <mark>heavy coursework, part-time work, and extracurricular activities</mark>. Initially, I was constantly <mark>overwhelmed and stressed</mark>, missing deadlines and feeling like I was always behind. That\'s when I started researching and implementing <mark>time management strategies</mark>.</p><p>I learned to manage my time through a combination of methods. I started using a <mark>weekly planner</mark> to schedule my tasks, adopted the <mark>Eisenhower Matrix</mark> to prioritize effectively, and began using the <mark>Pomodoro Technique</mark> to maintain focus during study sessions. I also learned to <mark>break large projects into smaller tasks</mark> and set intermediate deadlines.</p><p>This skill has been <mark>absolutely transformative</mark>. I\'ve gone from feeling constantly rushed to having <mark>time for both work and leisure</mark>. My grades improved significantly, and I actually feel less stressed now despite having more responsibilities. Time management has taught me that it\'s not about <mark>being busy all the time</mark> but about being <mark>intentional and strategic</mark> about how we spend our most precious resource.</p>',
    vocab: [
      { word: 'time management', meaning: 'the ability to organize and plan how to divide time between activities' },
      { word: 'personal and academic life', meaning: 'both your private life and your studies' },
      { word: 'transferable and valuable skills', meaning: 'abilities that can be used in many different situations' },
      { word: 'undergraduate years', meaning: 'the period spent studying for a bachelor\'s degree' },
      { word: 'heavy coursework, part-time work, and extracurricular activities', meaning: 'studying, working, and other commitments' },
      { word: 'overwhelmed and stressed', meaning: 'feeling unable to cope with demands' },
      { word: 'Eisenhower Matrix', meaning: 'a prioritization tool that categorizes tasks by urgency and importance' },
      { word: 'break large projects into smaller tasks', meaning: 'divide big work into manageable pieces' },
      { word: 'absolutely transformative', meaning: 'completely changing something for the better' },
      { word: 'intentional and strategic', meaning: 'planned and purposeful' }
    ],
    tips: [
      'Name the skill and explain why it\'s important in life',
      'Share how and when you learned this skill',
      'Describe how the skill has helped you specifically',
      'Give practical examples of how you use this skill'
    ]
  },

  // Card: A Skill You Would Like to Learn (p2-22)
  'p2-22': {
    answer: '<p>The skill I\'d love to learn in the future is <mark>graphic design</mark>, particularly <mark>digital illustration and visual communication</mark>. It\'s something I\'ve been wanting to pursue for quite some time now.</p><p>My interest in graphic design began when I started <mark>following designers on social media</mark> and was amazed by their ability to <mark>create visual stories</mark> that could evoke emotions and communicate complex ideas in an instant. I\'ve always admired people who can <mark>combine creativity with technology</mark> to produce something beautiful and functional.</p><p>If I were to learn this skill, I would start by <mark>enrolling in online courses</mark> on platforms like Coursera or Udemy, which offer comprehensive programs in graphic design. I would also practice regularly by <mark>creating designs for personal projects</mark> and <mark>seeking feedback</mark> from online communities. Eventually, I\'d like to invest in a <mark>drawing tablet</mark> to make the process more efficient.</p><p>I plan to start learning within the next few months, possibly during my <mark>summer break from university</mark>. The reason I want to learn this skill is multifaceted — it would <mark>complement my current studies</mark>, give me a <mark>creative outlet</mark>, and potentially open up <mark>freelance opportunities</mark> in the future. More importantly, I believe it would help me <mark>think more visually and communicate more effectively</mark> in our increasingly image-driven world.</p>',
    vocab: [
      { word: 'graphic design', meaning: 'the art of creating visual content for communication' },
      { word: 'digital illustration and visual communication', meaning: 'creating images using digital tools and conveying messages through visuals' },
      { word: 'create visual stories', meaning: 'tell narratives through images and design' },
      { word: 'combine creativity with technology', meaning: 'use imagination along with technical tools' },
      { word: 'enrolling in online courses', meaning: 'signing up for education through the internet' },
      { word: 'seeking feedback', meaning: 'asking for opinions to improve' },
      { word: 'drawing tablet', meaning: 'a device that allows drawing on a computer with a special pen' },
      { word: 'summer break from university', meaning: 'the vacation period during summer' },
      { word: 'freelance opportunities', meaning: 'ways to work independently for different clients' },
      { word: 'think more visually', meaning: 'process information through images and design' }
    ],
    tips: [
      'Name the specific skill you want to learn',
      'Explain why you want to learn it and when you became interested',
      'Describe how you would go about learning it',
      'Share your timeline and what motivates you to pursue this skill'
    ]
  },

  // Card: A Natural Place You Visited (p2-23)
  'p2-23': {
    answer: '<p>One of the most <mark>awe-inspiring natural places</mark> I\'ve ever visited is the <mark>Zao Mountain Range</mark> in Japan, which I explored during a trip about two years ago. It\'s famous for its <mark>"snow monsters"</mark> — trees covered in thick snow and ice that create <mark>unusual, otherworldly shapes</mark>.</p><p>I went there in February during the peak winter season. The <mark>cable car ride</mark> to the summit was already an adventure in itself, offering <mark>breathtaking panoramic views</mark> of the snow-covered landscape. At the top, the <mark>wintry wonderland</mark> stretched as far as the eye could see — thousands of <mark>beech trees encased in white</mark>, standing like silent statues in the fog.</p><p>I spent the entire day <mark>hiking through the trails</mark> with a small group. There was something almost <mark>spiritual about the place</mark> — the way the snow muffled all sounds, creating a <mark>serene, almost sacred silence</mark>. I also visited the <mark>natural hot springs</mark> at the base of the mountain, which was the perfect way to warm up after hours in the cold.</p><p>What really moved me was the <mark>profound sense of peace and perspective</mark> I felt standing amidst such natural grandeur. It reminded me of how <mark>small we are in the grand scheme of things</mark> and how important it is to <mark>preserve these pristine environments</mark> for future generations. This experience sparked a deeper <mark>appreciation for nature</mark> that has stayed with me ever since.</p>',
    vocab: [
      { word: 'awe-inspiring natural places', meaning: 'locations that inspire strong feelings of wonder' },
      { word: 'Zao Mountain Range', meaning: 'a mountain area in Japan known for winter scenery' },
      { word: '"snow monsters"', meaning: 'trees covered in snow and ice with unusual shapes' },
      { word: 'otherworldly shapes', meaning: 'forms that look like they belong in a fantasy world' },
      { word: 'breathtaking panoramic views', meaning: 'stunning scenery that spans across the horizon' },
      { word: 'wintry wonderland', meaning: 'a beautiful winter landscape' },
      { word: 'hiking through the trails', meaning: 'walking on marked paths in nature' },
      { word: 'serene, almost sacred silence', meaning: 'a peaceful, deeply respectful quiet' },
      { word: 'profound sense of peace and perspective', meaning: 'a deep feeling of calm and understanding' },
      { word: 'pristine environments', meaning: 'pure, untouched natural areas' }
    ],
    tips: [
      'Name the natural place and describe where it is',
      'Explain what you did there and what you saw',
      'Describe who you went with and the atmosphere',
      'Share how the experience affected you emotionally'
    ]
  },

  // Card: Something You Did That Was New and Exciting (p2-24)
  'p2-24': {
    answer: '<p>Something I did recently that was completely <mark>new and exhilarating</mark> was <mark>go skydiving</mark> for the first time about six months ago. It was hands down the most <mark>adrenaline-pumping experience</mark> of my life.</p><p>The event took place at a <mark>licensed skydiving center</mark> about two hours from my city. I had booked the experience on impulse after my friend challenged me to do something <mark>outside my comfort zone</mark>. When I arrived, I was a <mark>mixed bundle of nerves and excitement</mark>.</p><p>After completing the <mark>mandatory safety training</mark> and getting fitted into a jumpsuit and harness, we were taken up in the plane. The ascent to <mark>14,000 feet</mark> felt both exciting and terrifying. The instructor strapped himself to my back, and when the door opened, the <mark>roaring wind and cold air</mark> hit me immediately. Then came the jump — and for those few <mark>incredible seconds of freefall</mark>, time seemed to stop. The sensation of <mark>flying through the clouds</mark> was absolutely indescribable.</p><p>The experience was <mark>truly transformative</mark>. It showed me that I was capable of far more than I thought. Every time I face a <mark>challenging situation</mark> now, I remind myself of that moment of jumping out of a plane and use it as <mark>proof that I can push through fear</mark>. It\'s safe to say it was a <mark>life-changing moment</mark> that I\'ll never forget.</p>',
    vocab: [
      { word: 'new and exhilarating', meaning: 'something never experienced before that is very exciting' },
      { word: 'go skydiving', meaning: 'the sport of jumping from an aircraft and falling before opening a parachute' },
      { word: 'adrenaline-pumping experience', meaning: 'an activity that creates high excitement and nervous energy' },
      { word: 'outside my comfort zone', meaning: 'beyond what I normally feel comfortable doing' },
      { word: 'licensed skydiving center', meaning: 'an officially permitted skydiving facility' },
      { word: 'mandatory safety training', meaning: 'required instruction on how to stay safe' },
      { word: 'incredible seconds of freefall', meaning: 'the brief period of falling through the air before the parachute opens' },
      { word: 'flying through the clouds', meaning: 'moving through the sky among cloud formations' },
      { word: 'truly transformative', meaning: 'making a deep and lasting change' },
      { word: 'life-changing moment', meaning: 'an experience that significantly alters one\'s life' }
    ],
    tips: [
      'Name the activity and explain when and where you did it',
      'Describe what made this experience new and exciting',
      'Share specific details about what you did and felt',
      'Explain why this experience was memorable and how it affected you'
    ]
  },

  // Card: A Time You Disagreed with Someone (p2-27)
  'p2-27': {
    answer: '<p>A time when I had a <mark>significant disagreement</mark> was with my best friend Priya about <mark>choosing a university for our postgraduate studies</mark>. This happened about a year ago when we were both applying to various programs.</p><p>The disagreement arose because Priya wanted us to apply to the <mark>same university</mark> in a different city, while I had my heart set on staying in our hometown. We had <mark>been inseparable</mark> throughout our undergraduate years, and she felt that <mark>going our separate ways</mark> would affect our friendship. She argued that experiencing new things <mark>together</mark> would strengthen our bond.</p><p>For my part, I explained that my <mark>family situation required</mark> me to stay close to home — my mother had been unwell, and I needed to <mark>be available for her</mark>. This was a non-negotiable factor for me. I suggested that <mark>distance wouldn\'t weaken our friendship</mark> — that true friendship could survive being apart, and we could visit each other during breaks.</p><p>It took several <mark>honest and heartfelt conversations</mark> before we found a resolution. In the end, we both <mark>respected each other\'s choices</mark>. Priya went to the other city while I stayed local. Looking back, this experience actually <mark>strengthened our friendship</mark> because we learned how to <mark>communicate openly and respect each other\'s boundaries</mark>. It taught me that disagreements, when handled maturely, can actually <mark>deepen relationships</mark> rather than damage them.</p>',
    vocab: [
      { word: 'significant disagreement', meaning: 'a serious difference of opinion' },
      { word: 'choosing a university', meaning: 'deciding which higher education institution to attend' },
      { word: 'postgraduate studies', meaning: 'advanced education after completing a bachelor\'s degree' },
      { word: 'been inseparable', meaning: 'always together and never apart' },
      { word: 'going our separate ways', meaning: 'taking different paths or directions' },
      { word: 'family situation required', meaning: 'circumstances at home made something necessary' },
      { word: 'be available for her', meaning: 'be present and ready to help her' },
      { word: 'honest and heartfelt conversations', meaning: 'sincere discussions with genuine emotion' },
      { word: 'communicate openly', meaning: 'share thoughts and feelings freely and honestly' },
      { word: 'deepen relationships', meaning: 'make connections stronger and more meaningful' }
    ],
    tips: [
      'Explain who you disagreed with and what the disagreement was about',
      'Share both sides of the argument',
      'Describe how you resolved the disagreement',
      'Reflect on how the experience affected your relationship'
    ]
  },

  // Card: A Decision You Made That Changed Your Life (p2-28)
  'p2-28': {
    answer: '<p>The decision that has had the most <mark>profound impact on my life</mark> was choosing to <mark>study abroad for a year</mark> as part of my university program. This happened three years ago, and it fundamentally <mark>transformed who I am as a person</mark>.</p><p>At the time, I was faced with a <mark>difficult choice</mark>. On one hand, I could stay in my home country and continue my studies as normal. On the other hand, I had been offered a place in an <mark>exchange program</mark> that would take me to a university in Germany for one year. There were also alternative options like <mark>taking a gap year to work</mark> or pursuing an <mark>internship locally</mark>.</p><p>The main factor that influenced my decision was my <mark>desire to challenge myself</mark> and step outside my comfort zone. I had always been someone who <mark>preferred familiarity and security</mark>, and I knew that staying put would mean missing out on a <mark>life-changing opportunity</mark>. I also reasoned that <mark>immersing myself in a different culture</mark> would help me grow as a person and open doors to <mark>international career opportunities</mark>.</p><p>That single decision has <mark>completely altered the trajectory of my life</mark>. I made lifelong friends from around the world, became <mark>fluent in German</mark>, developed <mark>greater independence and confidence</mark>, and discovered a <mark>passion for international affairs</mark>. The experience also helped me <mark>clarify my career goals</mark>. If I had made a different choice, I would not be the person I am today.</p>',
    vocab: [
      { word: 'profound impact on my life', meaning: 'a deep and significant effect on my life' },
      { word: 'study abroad for a year', meaning: 'attend university in another country for one year' },
      { word: 'difficult choice', meaning: 'a decision that was hard to make' },
      { word: 'exchange program', meaning: 'a program allowing students to study at another university' },
      { word: 'taking a gap year', meaning: 'taking a year off from studies to do other things' },
      { word: 'challenge myself', meaning: 'push myself to try difficult things' },
      { word: 'step outside my comfort zone', meaning: 'do things that are beyond my usual limits' },
      { word: 'immersing myself in a different culture', meaning: 'deeply engaging with traditions of another country' },
      { word: 'completely altered the trajectory of my life', meaning: 'fundamentally changed the direction of my life' },
      { word: 'clarify my career goals', meaning: 'better understand what I want to do professionally' }
    ],
    tips: [
      'Name the decision and explain what alternatives you had',
      'Describe the factors that influenced your choice',
      'Share how the decision changed your life — be specific about outcomes',
      'Reflect on whether it was the right decision'
    ]
  },

  // Card: A Book You Have Read Recently (p2-29)
  'p2-29': {
    answer: '<p>The book I\'ve read recently that has truly stayed with me is <mark>"Atomic Habits" by James Clear</mark>. I finished it about three months ago, and it has <mark>completely reshaped my approach</mark> to personal development.</p><p>The book is about the <mark>power of small improvements</mark> and how making tiny, consistent changes can lead to <mark>remarkable results over time</mark>. Clear argues that we should focus on <mark>systems rather than goals</mark> — instead of setting ambitious targets, we should build <mark>habits and routines</mark> that naturally lead to success.</p><p>I picked up this book because I had been struggling with <mark>consistency in my studies and fitness routine</mark>. I would start strong but <mark>quickly lose motivation</mark> after a few weeks. Clear\'s concepts of <mark>"habit stacking," "environment design,"</mark> and the <mark>"two-minute rule"</mark> were exactly what I needed. The idea of making habits so <mark>easy to start</mark> that they become inevitable was a game-changer for me.</p><p>Since reading the book, I\'ve implemented several of its principles. I\'ve created a <mark>morning routine</mark> that starts with just two minutes of reading, and I\'ve redesigned my study space to <mark>minimize distractions</mark>. The results have been <mark>noticeably positive</mark> — I\'m more consistent, less stressed, and more <mark>confident in my ability to improve</mark>. This book has proven to be one of the most <mark>practical and transformative reads</mark> of my life.</p>',
    vocab: [
      { word: 'Atomic Habits', meaning: 'a bestselling self-improvement book by James Clear' },
      { word: 'completely reshaped my approach', meaning: 'fundamentally changed how I think and act' },
      { word: 'power of small improvements', meaning: 'the effectiveness of making tiny positive changes' },
      { word: 'systems rather than goals', meaning: 'focusing on processes instead of targets' },
      { word: 'habits and routines', meaning: 'regular patterns of behavior' },
      { word: 'consistency in my studies', meaning: 'regular and steady effort in learning' },
      { word: 'habit stacking', meaning: 'linking a new habit to an existing one' },
      { word: 'environment design', meaning: 'arranging your surroundings to support good habits' },
      { word: 'game-changer', meaning: 'something that significantly improves a situation' },
      { word: 'practical and transformative reads', meaning: 'books that are useful and life-changing' }
    ],
    tips: [
      'Name the book and explain what it\'s about',
      'Share why you chose to read it',
      'Describe the main ideas or lessons that stood out to you',
      'Explain how the book affected you or changed your thinking'
    ]
  },

  // Card: A Festival That Is Important in Your Country (p2-31)
  'p2-31': {
    answer: '<p>A festival that holds <mark>immense cultural significance</mark> in my country is <mark>Diwali</mark>, the Festival of Lights. It\'s celebrated by millions of <mark>Hindus, Sikhs, and Jains</mark> across India and is genuinely the most <mark>joyful and anticipated celebration</mark> of the year.</p><p>During Diwali, which usually falls in October or November, my family and I engage in a <mark>wide range of traditions</mark>. We start by <mark>cleaning and decorating our home</mark> with colorful rangoli designs and oil lamps called diyas. On the main night, we perform a <mark>prayer ceremony</mark> to Goddess Lakshmi, seeking blessings for prosperity. Then comes the best part — <mark>lighting fireworks and bursting crackers</mark>! We also prepare <mark>traditional sweets and snacks</mark> to share with neighbors and relatives.</p><p>I usually celebrate Diwali with my <mark>immediate and extended family</mark> who gather at my grandparents\' ancestral home. The entire neighborhood comes alive with <mark>dancing, music, and laughter</mark>. The sight of <mark>thousands of diyas</mark> illuminating houses and temples is absolutely <mark>magnificent and spiritual</mark>.</p><p>What makes Diwali so important to me is its <mark>deeper spiritual meaning</mark>. It represents the <mark>triumph of light over darkness</mark> and good over evil. It\'s a time for <mark>renewal, forgiveness, and gratitude</mark>. Despite the commercialization of the festival, I believe its <mark>core message of positivity and unity</mark> remains as relevant as ever, and it truly brings our <mark>diverse community together</mark>.</p>',
    vocab: [
      { word: 'immense cultural significance', meaning: 'great importance in a culture' },
      { word: 'Festival of Lights', meaning: 'another name for Diwali, celebrating light over darkness' },
      { word: 'Hindus, Sikhs, and Jains', meaning: 'various religious communities in India' },
      { word: 'cleaning and decorating our home', meaning: 'tidying and adorning the house' },
      { word: 'traditional sweets and snacks', meaning: 'typical Indian food prepared for celebrations' },
      { word: 'immediate and extended family', meaning: 'close relatives and other family members' },
      { word: 'thousands of diyas', meaning: 'numerous small oil lamps' },
      { word: 'magnificent and spiritual', meaning: 'impressive and deeply meaningful' },
      { word: 'triumph of light over darkness', meaning: 'victory of good over evil' },
      { word: 'diverse community together', meaning: 'bringing different groups of people united' }
    ],
    tips: [
      'Name the festival and explain when and why it is celebrated',
      'Describe specific traditions and activities you participate in',
      'Share who you celebrate with and how',
      'Explain the cultural or spiritual significance of the festival'
    ]
  },

  // Card: Something You Want to Do but Have Not Had Time For (p2-32)
  'p2-32': {
    answer: '<p>Something I\'ve been longing to do for years but simply haven\'t found the time for is <mark>learning to play the guitar</mark>. It\'s been a <mark>burning desire</mark> ever since I watched a local band perform at a street festival about five years ago and was <mark>completely captivated</mark> by the sound of an acoustic guitar.</p><p>What I want to do is not just learn a few basic chords — I want to <mark>genuinely master the instrument</mark> and be able to play my favorite songs. I dream of sitting on a <mark>peaceful evening</mark>, strumming along to folk songs, and eventually being able to <mark>compose my own music</mark>. There\'s something incredibly <mark>romantic and fulfilling</mark> about the idea of making music with my own hands.</p><p>I plan to start learning once I complete my <mark>current academic commitments</mark> — probably after my final exams next year. I\'ve already done some research and found a <mark>reputable music school</mark> nearby that offers flexible evening classes. I\'ve also been <mark>saving up</mark> to buy a good quality guitar.</p><p>The main reason I haven\'t been able to pursue this yet is simply the <mark>lack of time and mental bandwidth</mark>. Between university, work, and other responsibilities, there always seems to be something more urgent. However, I firmly believe that <mark>passion projects</mark> like this are essential for <mark>overall well-being and happiness</mark>, which is why I\'m determined to make it happen soon.</p>',
    vocab: [
      { word: 'learning to play the guitar', meaning: 'acquiring the skill of producing music on a guitar' },
      { word: 'burning desire', meaning: 'a strong and urgent wish' },
      { word: 'completely captivated', meaning: 'extremely interested and drawn in' },
      { word: 'genuinely master the instrument', meaning: 'truly become skilled at playing it' },
      { word: 'peaceful evening', meaning: 'a calm and quiet night' },
      { word: 'compose my own music', meaning: 'create original music myself' },
      { word: 'romantic and fulfilling', meaning: 'emotionally satisfying and dreamy' },
      { word: 'current academic commitments', meaning: 'present educational responsibilities' },
      { word: 'reputable music school', meaning: 'a well-respected music teaching institution' },
      { word: 'passion projects', meaning: 'activities pursued for enjoyment rather than necessity' }
    ],
    tips: [
      'Name what you want to do and why you want to do it',
      'Explain when you first developed this desire',
      'Share your plans for when and how you\'ll do it',
      'Describe why you haven\'t been able to do it yet'
    ]
  },

  // Card: A Piece of Equipment in Your Home (p2-33)
  'p2-33': {
    answer: '<p>A piece of equipment in my home that I absolutely <mark>cannot imagine living without</mark> is our <mark>robotic vacuum cleaner</mark>. It\'s a relatively recent addition — we bought it about two years ago — and it has genuinely <mark>revolutionized the way we manage household chores</mark>.</p><p>The device is a <mark>smart, disc-shaped vacuum</mark> that autonomously navigates around the house, <mark>detecting and avoiding obstacles</mark>. It connects to our Wi-Fi and can be <mark>controlled via a smartphone app</mark>. We schedule it to clean every morning at 8 AM before anyone wakes up, and it returns to its charging station when done.</p><p>I\'ve had this vacuum for about two years now, and I use it <mark>almost every day</mark>. The difference it has made to our daily lives is remarkable — we spend <mark>significantly less time</mark> on floor cleaning, and our floors are consistently <mark>spotless and dust-free</mark>. It\'s particularly useful for reaching <mark>under beds and furniture</mark> that are difficult to clean manually.</p><p>This piece of technology has made my life <mark>infinitely easier</mark> by freeing up time that I can spend on more <mark>productive or enjoyable activities</mark>. It has also sparked my interest in <mark>smart home technology</mark> and automation. What I love most is how it <mark>seamlessly integrates into daily routine</mark> — once set up, it requires virtually no effort from us, yet consistently delivers excellent results.</p>',
    vocab: [
      { word: 'cannot imagine living without', meaning: 'consider essential and irreplaceable' },
      { word: 'robotic vacuum cleaner', meaning: 'an automatic device that cleans floors by itself' },
      { word: 'revolutionized the way', meaning: 'completely changed how something is done' },
      { word: 'smart, disc-shaped vacuum', meaning: 'a round intelligent cleaning device' },
      { word: 'autonomously navigates', meaning: 'moves around independently' },
      { word: 'detecting and avoiding obstacles', meaning: 'sensing and going around things in the way' },
      { word: 'controlled via a smartphone app', meaning: 'operated using a mobile phone application' },
      { word: 'significantly less time', meaning: 'a notably reduced amount of time' },
      { word: 'spotless and dust-free', meaning: 'completely clean with no dust' },
      { word: 'seamlessly integrates into daily routine', meaning: 'fits naturally into everyday life' }
    ],
    tips: [
      'Name the equipment and describe what it looks like',
      'Explain how long you\'ve had it and how often you use it',
      'Describe specific ways it has made your life easier',
      'Share why this particular piece of equipment is so valuable to you'
    ]
  },

  // Card: A Time When You Were Surprised (p2-35)
  'p2-35': {
    answer: '<p>One of the most <mark>unexpected and delightful surprises</mark> I\'ve ever experienced was when I <mark>ran into an old school friend</mark> in a completely different country. This happened about eight months ago when I was <mark>visiting Tokyo on vacation</mark>.</p><p>I was walking through the <mark>bustling Shibuya district</mark> on a Saturday evening, navigating through the crowds near the famous <mark>crossing</mark>, when I heard someone call my name. At first, I thought I was <mark>mistaken</mark> — what were the chances of meeting someone I knew in such a <mark>vast and foreign city</mark>? But then I turned around and saw <mark>Rahul, my best friend from primary school</mark>, standing there with the biggest smile on his face.</p><p>Both of us were <mark>completely shocked</mark>. We hadn\'t seen each other in over <mark>twelve years</mark> since he moved to another city with his family when we were just kids. We immediately <mark>embraced and started talking</mark> non-stop, trying to catch up on all those years. What made this even more <mark>extraordinary</mark> was that neither of us had any idea the other would be in Japan — it was pure coincidence.</p><p>The experience left me feeling <mark>overwhelmed with joy and a strange sense of nostalgia</mark>. It reminded me that the world is smaller than we think and that <mark>meaningful connections</mark> can be rekindled in the most <mark>unexpected circumstances</mark>. We spent the entire evening together and have been <mark>in regular contact ever since</mark>, planning to meet again soon.</p>',
    vocab: [
      { word: 'unexpected and delightful surprises', meaning: 'pleasant events that no one anticipated' },
      { word: 'ran into an old school friend', meaning: 'met a former classmate by chance' },
      { word: 'bustling Shibuya district', meaning: 'a busy, lively area in Tokyo' },
      { word: 'completely shocked', meaning: 'very surprised and unable to believe what happened' },
      { word: 'twelve years', meaning: 'a long time period' },
      { word: 'extraordinary', meaning: 'very unusual or remarkable' },
      { word: 'overwhelmed with joy', meaning: 'filled with great happiness' },
      { word: 'a strange sense of nostalgia', meaning: 'a longing for the past mixed with surprise' },
      { word: 'meaningful connections', meaning: 'important relationships between people' },
      { word: 'unexpected circumstances', meaning: 'situations that happen by chance' }
    ],
    tips: [
      'Explain what surprised you and describe the situation',
      'Share when and where it happened',
      'Describe who was with you during this moment',
      'Explain how you felt and how you reacted to the surprise'
    ]
  },

  // Card: An Object You Cannot Live Without (p2-36)
  'p2-36': {
    answer: '<p>The object I truly cannot imagine living without is my <mark>smartphone</mark>. It has become so <mark>integral to my daily existence</mark> that it feels like an extension of myself rather than just a device.</p><p>I received my first smartphone when I was sixteen years old, and that was about seven years ago. Since then, it has become <mark>increasingly essential</mark> with each passing year. I use it throughout the day — for <mark>communication, navigation, entertainment, banking, and work</mark>. It\'s the first thing I reach for in the morning and the last thing I check before sleep.</p><p>The ways in which it has made my life easier are <mark>virtually countless</mark>. It allows me to <mark>stay connected with friends and family</mark> no matter where they are in the world. I can <mark>access information instantly</mark> for work or studies. The <mark>navigation apps</mark> have saved me from getting lost countless times. I can <mark>manage my finances, shop online, and entertain myself</mark> during commutes or waiting periods. In essence, it has become my <mark>personal assistant, entertainer, and lifeline</mark>.</p><p>What I find remarkable is how it has <mark>democratized access to information and services</mark>. Whether it\'s <mark>learning a new skill</mark> through apps, <mark>calling a cab</mark>, or <mark>translating languages</mark> while traveling, the smartphone has made so many things possible that would have been <mark>inconceivable just a decade ago</mark>. It has truly become <mark>indispensable</mark> in the way I function in modern society.</p>',
    vocab: [
      { word: 'smartphone', meaning: 'a mobile phone with advanced computer capabilities' },
      { word: 'integral to my daily existence', meaning: 'essential and woven into everyday life' },
      { word: 'increasingly essential', meaning: 'becoming more and more necessary over time' },
      { word: 'communication, navigation, entertainment, banking, and work', meaning: 'various functions a smartphone provides' },
      { word: 'stay connected with friends and family', meaning: 'maintain relationships with loved ones' },
      { word: 'virtually countless', meaning: 'too many to count' },
      { word: 'access information instantly', meaning: 'obtain knowledge immediately' },
      { word: 'personal assistant, entertainer, and lifeline', meaning: 'a device that helps with tasks, fun, and safety' },
      { word: 'democratized access to information', meaning: 'made knowledge available to everyone' },
      { word: 'indispensable', meaning: 'absolutely necessary and impossible to replace' }
    ],
    tips: [
      'Name the object and describe it briefly',
      'Explain when you got it and how often you use it',
      'Share specific ways it has made your life easier or better',
      'Explain why this object is so important to you'
    ]
  },

  // Card: A Time When You Felt Very Proud of Yourself (p2-37)
  'p2-37': {
    answer: '<p>A moment when I felt an <mark>immense sense of pride</mark> was when I <mark>completed my first marathon</mark> about a year ago. It was a grueling 42-kilometer race that pushed me to my absolute <mark>physical and mental limits</mark>, and crossing that finish line was one of the most <mark>triumphant moments</mark> of my life.</p><p>The event took place in my hometown on a <mark>crisp autumn morning</mark>. There were thousands of runners, and the atmosphere was <mark>electric and inspiring</mark>. My family had come to support me, and I could see them <mark>cheering from the sidelines</mark> as I approached the finish line. When I finally crossed it, I was <mark>overwhelmed with emotion</mark> — I fell to my knees and cried tears of <mark>pure joy and relief</mark>.</p><p>What made this achievement even more special was that I had only <mark>started running seriously</mark> three years earlier, after years of being <mark>completely sedentary</mark>. There were many times during training when I wanted to <mark>give up</mark> — the early morning runs, the aching muscles, the self-doubt. But I persevered, and that day proved to myself that <mark>dedication and hard work truly pay off</mark>.</p><p>The feeling of pride wasn\'t just about finishing the race — it was about <mark>proving my own capability</mark> and learning that I could set a <mark>seemingly impossible goal</mark> and actually achieve it through <mark>consistent effort and determination</mark>. That experience has given me <mark>unshakeable confidence</mark> that I carry with me in all aspects of my life.</p>',
    vocab: [
      { word: 'immense sense of pride', meaning: 'a very strong feeling of satisfaction in oneself' },
      { word: 'completed my first marathon', meaning: 'finished a 42.195 km running race for the first time' },
      { word: 'physical and mental limits', meaning: 'the maximum capability of body and mind' },
      { word: 'triumphant moments', meaning: 'times of great victory and success' },
      { word: 'crisp autumn morning', meaning: 'a cool, fresh morning in fall' },
      { word: 'electric and inspiring', meaning: 'full of excitement and motivation' },
      { word: 'cheering from the sidelines', meaning: 'showing support from the edges of the race' },
      { word: 'completely sedentary', meaning: 'living a lifestyle with very little physical activity' },
      { word: 'dedication and hard work truly pay off', meaning: 'effort and commitment lead to success' },
      { word: 'unshakeable confidence', meaning: 'a belief in oneself that cannot be broken' }
    ],
    tips: [
      'Explain what happened and describe the achievement',
      'Share where and when it took place',
      'Describe who was there to witness it',
      'Reflect on why this moment made you feel proud'
    ]
  }

};

window.MODEL_ANSWERS = MODEL_ANSWERS;
window.IELTS_DATA = IELTS_DATA;
