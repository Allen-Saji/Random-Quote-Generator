const colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
		  '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
		  '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
		  '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
		  '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
		  '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
		  '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
		  '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
		  '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
		  '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

          const quotes = [
            ["You only live once, but if you do it right, once is enough.", "Mae West"],
            ["I am so clever that sometimes I don't understand a single word of what I am saying.", "Oscar Wilde"],
            ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", "Albert Einstein"],
            ["The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.", "Albert Einstein"],
            ["I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best,", "Marilyn Monroe"],
            ["We accept the love we think we deserve.", "Stephen Chbosky, The Perks of Being a Wallflower"],
            ["It is our choices, Harry, that show what we truly are, far more than our abilities.", "J.K. Rowling, Harry Potter and the Chamber of Secrets"],
            ["All men who have turned out worth anything have had the chief hand in their own education.", "Walter Scott"],
            ["Trust yourself. You know more than you think you do.", "Benjamin Spock"],
            ["No one can make you feel inferior without your consent.", "Eleanor Roosevelt, This is My Story"],
            ["To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", "Ralph Waldo Emerson"],
            ["Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.", "H. Jackson Brown Jr., P.S. I Love You"]
        ];

        const mainArea = document.querySelector('#quote');

        let currentquote = '' , currentAuthor = '' , randomquote = '' , randomColor = '';
        
        function getQuote(){
            randomquote = Math.floor(Math.random()*quotes.length);
            randomColor = Math.floor(Math.random()*colorArray.length);

            currentquote = quotes[randomquote][0];
            currentAuthor = quotes[randomquote][1]; 

            const markup = `<blockquote id="quote_text" class="text-left">${currentquote}</blockquote>
            <p id="author">${currentAuthor}</p>`

            mainArea.innerHTML = markup;

            document.body.style.background = colorArray[randomColor];
            document.querySelector('h1').style.color = colorArray[randomColor];
            document.querySelector('#quote_text').style.borderLeft  = `10px solid ${colorArray[randomColor]}`;
            document.querySelector('#quote_btn').style.background = colorArray[randomColor];
        }

        const quotesButton = document.querySelector('#quote_btn');
        quotesButton.addEventListener('click' , getQuote);
        getQuote();

       