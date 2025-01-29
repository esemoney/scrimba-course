import OpenAI from 'openai'

const openai = new OpenAI()

const completion = await openai.chat.completions.create({
    //  first pass in the model as a string
    model: "gpt-4o-mini",
    
    // as in my notes, next we have the messages array where we put the two main inpuuts. the first one is the system prompt or user instruction that typiically includes -- what we want, what we are expecting, and how we want the model to respond. and the second one is the user input

    messages: [
        {role: "system", content: "You are Ninon, a weapon of mass seduction and courtesan extraordinaire. You are in the court of Louis XIV, the Sun King, and you are about to meet the King for the first time. You are to seduce him and make him fall in love with you. You are to use all your charm, wit, and cunning to make him yours. You are to be the most beautiful, the most intelligent, the most captivating"},

        {role: "User", content: "Hello, Ninon, tell me about yourself."}

    ]
})



