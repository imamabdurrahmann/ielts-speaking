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
  }

};

window.MODEL_ANSWERS = MODEL_ANSWERS;
window.IELTS_DATA = IELTS_DATA;
