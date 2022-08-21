export const nodeCategories = [
  {
    name: "Banking",
    desc: "Banking is described as a the business activity of collecting and safeguarding money owned by other persons and businesses, and then lending out this money to execute economic activities such as profit or merely covering operational expenditures.",
    color: "#493321",
    path: "banking",
  },
  {
    name: "Savings",
    desc: "Savings are the funds left over after subtracting a person's consumer expenditure from their disposable income during a certain time period. After all costs and responsibilities have been met, savings signifies a net excess of cash for a person or family.",
    color: "#493321",
    path: "savings",
  },
  {
    name: "GIC",
    desc: "A GIC (guaranteed investment certificate) is a relatively risk-free investment. A GIC is similar to a savings account in that you deposit money into it and earn interest on it. The distinction is that you must leave your money in a GIC account for a set amount of time. Depending on the sort of GIC you possess, you may have to pay a penalty if you take it out early.",
    color: "#493321",
    path: "gic",
  },
  {
    name: "Stocks",
    desc: "A stock, often known as equity, is a financial instrument that reflects ownership of a portion of the issuing firm. Shares are units of stock that entitle the owner to a proportion of the corporation's assets and income equal to the amount of stock they possess. Stocks are mostly purchased and sold on stock exchanges, and they must adhere to government laws designed to protect investors from unscrupulous acts.",
    color: "#493321",
    path: "stocks",
  },
  {
    name: "Mutual Funds",
    desc: "A mutual fund is a form of investment scheme in which money from numerous participants is pooled and invested in various assets such as bonds, equities, and/or money market investments. Fund Managers professionally manage mutual funds, allocating assets and attempting to create returns for investors.",
    color: "#493321",
    path: "mutualfunds",
  },
  {
    name: "Options Trading",
    desc: "The purchase or selling of an option contract on an underlying securities is known as options trading. Investors may profit from trading options in any market circumstance. An option is a contract between two parties that grants the holder the right, but not the duty, to purchase or sell a securities at a given price over a certain time period. If the holder decides to exercise their right, the option writer must honour the agreement.",
    color: "#493321",
    path: "options",
  },
  {
    name: "Credit Cards",
    desc: "A credit card is a physical card provided by a financial institution, usually a bank, that allows the cardholder to borrow money from that institution. Cardholders agree to repay the money with interest according to the rules of the institution. Standard credit cards, rewards cards, balance transfer cards, secured credit cards, and charge cards are all different types of credit cards.",
    color: "#493321",
    path: "creditcards",
  },
  {
    name: "Credit Scores",
    desc: "A credit score ranges from 300 to 850 and represents a consumer's creditworthiness. The higher the score, the more favorable a borrower seems to potential lenders.  A credit score is determined by credit history, which includes the number of open accounts, overall debt levels, repayment history, and other criteria. Lenders use credit ratings to assess the likelihood that a borrower will repay loans on time.",
    color: "#493321",
    path: "creditscore",
  },
];

export const ArticleData = [
  {
    module: "banking",
    modulePath: "/banking",
    desc: "Learn about the different banks Canada has to offer and find the one that will suit you the best!",
    chapters: [
      {
        chapterName: "The big 5",
        chapterContent:
          "The name Big Five Banks refers to Canada's five major banks: Royal Bank, Bank of Montreal, Canadian Imperial Bank of Commerce, Bank of Nova Scotia, and Toronto-Dominion Bank.",
        pathValue: "thebig5",
      },
      {
        chapterName: "The Royal Bank of Canada ",
        chapterContent:
          "The Royal Bank of Canada is the largest of the Big Five with respect to net revenue (C$11.4 billion in 2020) and capitalization (C$132.5 billion in 2020). The Royal Bank of Canada has over 17 million clients worldwide, over 86,000 full-time employees and over 1,300 branches. Founded in 1864 in Halifax, Nova Scotia, the bank financed the lumber and timber industries. It was known as the Merchants Bank of Halifax.",
        pathValue: "royalbank",
      },
      {
        chapterName: "Toronto-Dominion Bank",
        chapterContent:
          "The second-largest bank in Canada, the Toronto-Dominion Bank has the most assets, which are valued at C$1.7 trillion as of January 2021.1 This bank has over 9.6 million clients worldwide, 25,000 employees and over 1,100 branches. The bank was the result of a merger of the Bank of Toronto and the Dominion Bank in 1955.",
        pathValue: "toronto",
      },
      {
        chapterName: "Bank of Nova Scotia",
        chapterContent:
          "The Bank of Nova Scotia, or Scotiabank, is the next largest bank in Canada with assets valued at C$1.1 trillion at year end 2020, the revenue of C$31 billion in 2020 and capitalization of C$67 billion. The bank has over 11 million customers in Canada, 10 million customers outside of Canada, 92,000 full-time employees, and over 900 branches in Canada. This bank offers to trade on both the New York and Toronto Stock Exchanges. Founded in Halifax in 1832, Nova Scotia bank moved its headquarters to Toronto in 1900 to improve the transatlantic trade industry.",
        pathValue: "novascotia",
      },
      {
        chapterName: "Bank of Montreal",
        chapterContent:
          "The Bank of Montreal is the fourth largest Canadian bank with C$949 billion worth of assets and revenue of C$25 billion at year end 2020. The bank has over 8 million clients in Canada and almost 900 branches. The bank has over 42,000 employees worldwide as of Q2 of 2021. Throughout crises such as World War I, the Great Depression, World War II, and the 2008 Global Financial Crisis, the Bank has consistently met dividend payments.",
        pathValue: "montreal",
      },
      {
        chapterName: "Canadian Imperial Bank of Commerce",
        chapterContent:
          "The Canadian Imperial Bank of Commerce has C$770 billion in assets, the revenue of C$18.7 billion for 2020, and capitalization of C$44 billion. The bank has over 11 million clients worldwide, 1,100 branches in Canada and over 44,000 full-time employees worldwide. The bank was formed in 1961 when the Canadian Bank of Commerce and the Imperial Bank of Canada merged.",
        pathValue: "commerce",
      },
    ],
    quizQuestion: [],
  },
  {
    module: "Savings",
    modulePath: "/savings",
    desc: "Dive deeper into understanding the importance of saving money and the best ways to get started!",
    chapters: [
      {
        chapterName: "The Basics",
        chapterContent:
          "You will confront several decisions regarding saving and spending during your life. Your objectives might range from simple expenditures like a new smartphone to larger purchases like a car or a house, as well as long-term savings for retirement and other unknowns. Some life milestones, such as further education or beginning a family, may be planned for and saved for, but unanticipated costs are unavoidable. Saving is crucial because it allows you to be prepared for any sort of expenditure by having money set aside.",
        pathValue: "basics",
      },
      {
        chapterName: "Get Started",
        chapterContent:
          "If you're hesitant to begin saving or believe it's impossible, consider it a pathway to new opportunities rather than a burden. You'll probably need the money for unforeseen occurrences, both good and terrible, throughout your life. Here are some general guidelines to get you started. The first step is to develop and stick to a budget. Overestimate your estimated expenditures while creating a monthly budget. This way, you're more likely to have money left over, which you may put into savings. Second, pay yourself first by setting aside a fixed amount of money each month and treating it like any other payment. Set aside a portion of each paycheck (preferably 10 to 12 percent) and watch your savings increase. Third, save sensibly by selecting the appropriate savings strategies for your goals and conducting research to discover the best interest rates. Next, prepare for the unexpected by creating an emergency fund with three to six months' worth of living expenses in case of unforeseen charges. In addition, create financial goals to keep you on track. Use SMART objectives to determine how much you want to save and how long it will take to reach that goal. Setting specific goals makes it much easier to measure your progress.",
        pathValue: "getstarted",
      },
      {
        chapterName: "Set-Up a Savings Account",
        chapterContent:
          "You must open a savings account at a bank or credit union, either in person or online. The procedure is identical to that of opening a bank account. You will supply personal information to the institution and then deposit funds into the account. After you make a deposit, the funds in your savings account will start earning interest. The amount you earn is determined by a number of factors, including the APY on your savings account, the amount of money you deposit, and the length of time you maintain money in your account. Your bank can compound interest on a daily, monthly, quarterly, or annual basis. Your accumulated interest is credited into your account at the conclusion of each compounding cycle. Your new account balance (deposits plus interest) will then start earning interest.",
        pathValue: "setup",
      },
    ],
    quizQuestion: [],
  },
  {
    module: "GIC",
    modulePath: "/gic",
    desc: "Interested in investing your money? Read more about what GIC has to offer and the right way to start investing!",
    chapters: [
      {
        chapterName: "Understanding the Basics",
        chapterContent:
          "GIC is an abbreviation for Guaranteed Investment Certificate (at Tangerine, it stands for Guaranteed Investment). GICs, like savings accounts, pay greater interest rates than checking accounts. They give a guaranteed interest rate for a defined term length—anywhere from 30 days for short-term GICs to 5 or even 10 years for long-term GICs—after which they mature and the money is either re-invested in another GIC or paid out into another account.",
        pathValue: "understanding",
      },
      {
        chapterName: "Benefits of GIC",
        chapterContent:
          "They are regarded as low-risk. When you buy one, your money is safe and your interest rate is guaranteed. You have the option of defining the phrase. Though you may not be able to access your funds until your GIC matures, there are several periods available, with longer terms often delivering better interest rates. If you have some money set aside for tuition in a few months, placing it in a GIC with a 90-day term, for example, keeps it safe. If you can save some money that you won't need in the near future, periods of a year or more might bring in a higher interest rate.",
        pathValue: "benefits",
      },
      {
        chapterName: "Types of GIC",
        chapterContent:
          "GICs are classified into three categories, as explained below. Guaranteed-return GICs are the first type. This sort of GIC guarantees the interest rate and principal amount, so you don't have to worry about market or economic fluctuations. Guaranteed-return GICs enable you to invest in retirement plans such as Registered Retirement Income Fund (RRIF) or Life Income Fund (LIF), as well as foreign currency. The second type of GIC is interest rate linked GICs. This form of GIC has an interest rate that fluctuates in response to changes in the prime rate. Your principal amount is guaranteed upon maturity. If the prime rate rises during the life of your investment, your investment receives a greater interest rate. If the prime rate falls, you can withdraw your money and reinvest it in another financial instrument. Finally, the third type is known as market-linked GICs. This GIC is linked to the stock market (for example, the S&amp;P 500 Index) or equity benchmarks. They guarantee your initial investment and may occasionally provide a low interest rate. Furthermore, they may provide the opportunity to generate a return that exceeds inflation. For a set length of time, the performance of each market linked GIC is connected to a separate benchmark. The returns you get are either calculated as a percentage of the benchmark's stated gain or are capped at a certain level - be sure to verify which methodology your GIC employs. If the benchmark loses money or performs poorly, you will still receive your initial investment back, but its buying value will be diminished.",
        pathValue: "types",
      },
    ],
    quizQuestion: [],
  },
  {
    module: "Stocks",
    modulePath: "/stocks",
    desc: "Read more about getting started with investing in stocks and the best ways to do so!",
    chapters: [
      {
        chapterName: "The Basics",
        chapterContent:
          "A stock is a financial instrument that reflects ownership in a company or corporation and represents a proportionate claim on the assets (what it owns) and earnings of that firm or corporation (what it generates in profits). Stocks are sometimes referred to as shares or equity. A shareholder who holds stock owns a piece of the firm equal to the number of shares owned as a percentage of total outstanding shares. For example, an individual or corporation who holds 100,000 shares of a firm with one million outstanding shares owns 10% of it. Most firms have millions or billions of outstanding shares.",
        pathValue: "thebasics",
      },
      {
        chapterName: "Types of Stocks",
        chapterContent:
          "There are two forms of stock: ordinary stock and preferred stock. The term equities refers to ordinary shares, which have a far higher market value and trading volume than preferred shares. The fundamental contrast between the two is that common shares often have voting rights that allow the common shareholder to participate in company meetings and elections, whereas preferred shares do not. Preferred shares are so named because preferred shareholders get dividends and assets before common shareholders in the event of a liquidation. The voting rights of common stock can be further categorised. While the basic idea of common stock is that each share has one vote, some corporations have dual or multiple classes of stock with varying voting rights linked to each class. In a dual-class structure, Class A shares may have up to ten votes per share, whereas Class B shares may have just one vote per share. Dual- or multiple-class share arrangements are intended to provide a company's founders influence over its finances, strategic direction, and ability to innovate.",
        pathValue: "stocktypes",
      },
      {
        chapterName: "What is a Stock Exchange?",
        chapterContent:
          "Stock exchanges are secondary marketplaces in which existing shareholders can trade with prospective purchasers. It is critical to remember that firms listed on stock exchanges do not often purchase and sell their own shares. Companies may conduct stock buybacks or issue additional shares, although these are not routine activities and frequently take place outside of the framework of an exchange. So, when you buy a stock on the stock exchange, you are not purchasing it from the firm, but from another current shareholder. Similarly, when you sell your shares, you do not sell them back to the corporation, but rather to another investor.",
        pathValue: "stockexchanges",
      },
    ],
    quizQuestion: [],
  },
  {
    module: "Mutual Funds",
    modulePath: "/mutualfunds",
    desc: "Explore more about the importance mutual funds hold in banking smarter!",
    chapters: [
      {
        chapterName: "What is a Mutual Fund?",
        chapterContent:
          "A mutual fund is a sort of investment vehicle in which money from numerous participants is pooled and invested in various assets such as bonds, equities, and/or money market investments. Fund Managers professionally manage mutual funds, allocating assets and attempting to create returns for investors.",
        pathValue: "mutualfunds",
      },
      {
        chapterName: "Benefits of a Mutual Fund",
        chapterContent:
          "An investor may opt to invest in a mutual fund for a variety of reasons. Mutual funds, for example, often have a modest initial minimum investment amount and are exchanged once per day at their closing Net Asset Value (NAV), making them relatively accessible to most investors. Another advantage of mutual funds is that they are managed by a team of specialists behind the scenes. Actively managed funds use market opportunities and other tactics to choose which stocks, bonds, and other assets to purchase and sell in order to meet the mutual fund's investment objective. Finally, mutual funds can help with diversification. Because most mutual funds invest in a variety of securities, the risks are multiplied. Because most mutual funds invest in a variety of assets, the risks associated with investing in a single investment are mitigated because you are not putting all of your eggs in one basket.",
        pathValue: "benefits",
      },
      {
        chapterName: "How do mutual fund distributions work? ",
        chapterContent:
          "Capital gains, interest income, foreign source income, or taxable dividends may be distributed. Because mutual funds invest in a wide range of assets, income can be generated via dividends on stocks and interest on bonds kept in the fund's portfolio. A fund will normally distribute a percentage of its earnings to fund shareholders throughout the course of the year. Furthermore, if the fund sells holdings that have appreciated in value, most will distribute the proceeds to investors. Finally, if a fund's Net Asset Value (NAV) rises but is not sold by the fund management, the price of the fund's units rises. Investors can then sell their mutual fund shares for a profit.",
        pathValue: "distributions",
      },
    ],
    quizQuestion: [],
  },
  {
    module: "Options Trading",
    modulePath: "/optionstrading",
    desc: "Study the details on how to get involved in options trading and the benefits it may have in store for you!",
    chapters: [
      {
        chapterName: "Understanding the Basics",
        chapterContent:
          "When you trade options, you purchase or sell an underlying asset at a predetermined price by a specific future date. Trading stock options is more complicated than trading stocks. When you purchase a stock, you just specify the number of shares you desire, and your broker fills the order at the current market price or a limit price you choose. Options trading necessitates an awareness of sophisticated tactics, and creating an options trading account entails a few extra procedures than opening a standard investing account.",
        pathValue: "basic",
      },
      {
        chapterName: "Key Learnings",
        chapterContent:
          "Purchasing a call option, selling a call option, buying a put option, and selling a put option are the four basic options positions. The buyer of a call option is betting that the market price of an underlying asset will exceed a fixed price, known as the strike price, while the seller is wagering that it will not. The option buyer bets that the market price of an underlying asset will go below the strike price, while the seller bets that it will not. Buyers of call or put options have their losses limited to the cost of the option (its premium). Unhedged option sellers face theoretically limitless losses. Spreads with options include purchasing and selling various options contracts on the same underlying at the same time.",
        pathValue: "learning",
      },
    ],
    quizQuestion: [],
  },
  {
    module: "Credit Cards",
    modulePath: "/creditcards",
    desc: "Interested in holding a credit card? Don't know how to get started? Study the following chapters to understand the importance of credit cards!",
    chapters: [
      {
        chapterName: "The Basics",
        chapterContent:
          "Credit cards allow you to make balance transfers, which allow you to get out of debt. When you apply for a credit card, you are given a credit limit that can range from a few hundred dollars to thousands of dollars. You will have the ability to spend up to that amount. When you use your card to make a transaction, it will appear as pending on your account and will post within a few days. Your total balance will increase after the transaction is posted to your account. Every month, expect to get a bill from your card issuer that includes all posted purchases made during your billing period. You must pay at least the minimum to maintain your account in good standing.",
        pathValue: "thebasics",
      },
      {
        chapterName: "Common Terms",
        chapterContent:
          "Credit cards come with a slew of restrictions that govern the costs you might pay when you use your card. The following are some prevalent words. Annual fee: The fee that cardholders pay every year for having a credit card. Transfer of funds APR: The interest rate on balance transfers, which may be equal to or higher than the APR on purchases. Balance transfer fee: Transferring debt from one card to another may cost you between 3% and 5% of the total amount transferred. Cash advance APR: The interest rate you pay if you take out a cash advance, which is frequently one of the highest APRs available. Cash advance fee: The cost imposed for each cash advance, which is generally 5%. Foreign transaction charge: Purchases purchased outside the United States may be subject to a fee per transaction, which is typically 3%. Late payment penalty: If you pay your credit card bill late, you may be charged a fine of up to $40. The least amount of money you must pay each month to keep your account current. (Learn how merely making minimal payments on credit card debt may cost you hundreds of dollars and take a decade to repay.) Penalty APR: If you pay late, card companies may charge you with a greater interest rate than your standard APR. Purchase APR: The interest rate charged on new purchases that are not paid in full each billing cycle.",
        pathValue: "commonterms",
      },
    ],
    quizQuestion: [],
  },
  {
    module: "Credit Scores",
    modulePath: "/creditscores",
    desc: "Interested in figuring out ways to maintain a good credit score? Read further to learn everything you need to about getting started the right way!",
    chapters: [
      {
        chapterName: "Key Information",
        chapterContent:
          "A credit score ranges from 300 to 850 and represents a consumer's creditworthiness. Equifax, Experian, and TransUnion are the three major credit bureaus. A credit score is an important factor in a lender's decision to extend credit. Many financial institutions employ the FICO rating system. Credit rating factors include repayment history, loan kinds, duration of credit history, and an individual's overall debt. Credit utilization—the proportion of available credit that is presently being used—is one statistic used in establishing a credit score. It is not always wise to terminate an inactive credit account because doing so might affect a person's credit score.",
        pathValue: "info",
      },
      {
        chapterName: "How does it work?",
        chapterContent:
          "A credit score may have a huge impact on your financial life. It is an important factor in a lender's decision to extend credit to you. People with credit ratings below 640, for example, are termed subprime borrowers. Lending institutions frequently charge higher interest rates on subprime mortgages than on regular mortgages to compensate for bearing additional risk. For borrowers with poor credit, they may additionally request a shorter payback period or a co-signer. A credit score of 700 or higher, on the other hand, is typically regarded favourable and may result in a borrower having a reduced interest rate, which means they will spend less money in interest over the life of the loan. Scores of 800 or higher are considered outstanding.",
        pathValue: "how",
      },
      {
        chapterName: "How to improve your credit score",
        chapterContent:
          "When a borrower's credit report is updated, their credit score fluctuates and might climb or fall based on new information. Here are some strategies for improving a consumer's credit score: Pay all of your bills on time: Six months of on-time payments are necessary to noticeably improve your credit score. Boost your credit line: If you have credit card accounts, contact and ask about credit expansion. If your account is in good standing, your credit limit should be increased. However, it is critical not to spend this amount in order to keep your credit usage rate low. Don't cancel your credit card: It is preferable to avoid using a certain credit card. Closing an account might harm your credit score depending on the age and credit limit of the card. Assume you have $1,000 in debt and a $5,000 credit limit divided evenly between two cards. Your credit usage rate is at 20%, which is satisfactory. However, cancelling one of the cards would increase your credit usage percentage to 40%, which would be detrimental to your credit score. Use one of the top credit repair services: If you don't have the time to work on improving your credit, credit repair organisations will negotiate on your behalf with your creditors and the three credit bureaus in exchange for a monthly fee.",
        pathValue: "improve",
      },
    ],
    quizQuestion: [],
  },
];
