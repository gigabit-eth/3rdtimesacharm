import { Disclosure } from "@headlessui/react";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "Ape in/Aping",
    answer: "Jumping into a crypto investment with little to no research.",
  },
  {
    question: "Altcoin",
    answer: "Any cryptocurrency that isn’t Bitcoin.",
  },
  {
    question: "Bagholder",
    answer:
      "Someone holding a large amount of a coin, especially if its value has plummeted.",
  },
  {
    question: "Maximalist",
    answer:
      "A person who believes 'XYZ' crypto is the only cryptocurrency worth investing in.",
  },
  {
    question: "Crypto Winter",
    answer:
      "A prolonged period of stagnant or declining market prices in the cryptocurrency world.",
  },
  {
    question: "DeFi",
    answer:
      "Decentralized Finance - financial services with no central authority.",
  },
  {
    question: "Diamond Hands",
    answer:
      "Holding an investment despite potential losses or volatility, believing in its eventual profit.",
  },
  {
    question: "DYOR",
    answer:
      "Do Your Own Research - a disclaimer advising investors to research before investing.",
  },
  {
    question: "Fiat",
    answer: "Government-issued currency, not backed by a physical commodity.",
  },
  {
    question: "FOMO",
    answer:
      "Fear Of Missing Out - the anxiety that an exciting or interesting event is currently happening elsewhere, often aroused by posts seen on social media.",
  },
  {
    question: "FUD",
    answer:
      "Fear, Uncertainty, Doubt - spreading negativity or doubt without basis to manipulate the market.",
  },
  {
    question: "Gas Fees",
    answer: "Transaction fees on a blockchain, particularly Ethereum.",
  },
  {
    question: "HODL",
    answer:
      "Originally a misspelling of “hold,” now a term for holding a cryptocurrency long-term rather than selling it. The origins stem from OG Bitcoin forum: BitcoinTalk.",
  },
  {
    question: "ICO",
    answer:
      "Initial Coin Offering - a fundraising mechanism for new projects, similar to an initial public offering in the stock market.",
  },
  {
    question: "Jeet",
    answer:
      "Person who quickly sells when market gets rough. Origin from Indian name “Pajeet”.",
  },
  {
    question: "Lambo",
    answer:
      "Short for Lamborghini, symbolizing the ultimate crypto success fantasy.",
  },
  {
    question: "Liquidity",
    answer:
      "The ease with which a cryptocurrency can be bought and sold without affecting its price.",
  },
  {
    question: "Maxi",
    answer:
      "Shortened form of a maximalist, especially referring to proponents of a specific cryptocurrency.",
  },
  {
    question: "Moon/Mooning",
    answer: "A dramatic rise in a cryptocurrency’s price.",
  },
  {
    question: "NGMI",
    answer:
      "Not Gonna Make It - pessimism about the future success of a project or individual in the crypto space.",
  },
  {
    question: "NFT",
    answer:
      "Non-Fungible Token - a unique digital item such as art, collectibles, or in-game items.",
  },
  {
    question: "Paper Hands",
    answer:
      "Selling off cryptocurrencies at the first sign of a price drop, opposite of diamond hands.",
  },
  {
    question: "Rug Pull",
    answer:
      "A scam where developers abandon a project and run away with investors’ funds.",
  },
  {
    question: "Satoshi Nakamoto",
    answer: "The pseudonymous creator(s) of Bitcoin.",
  },
  {
    question: "Shill",
    answer: "Promoting a crypto project for personal gain, often misleadingly.",
  },
  {
    question: "Stablecoin",
    answer:
      "A cryptocurrency pegged to a stable asset, like the US dollar, to minimize price volatility.",
  },
  {
    question: "Tokenomics",
    answer:
      "The economics of a cryptocurrency, including supply, distribution, and how it can be used.",
  },
  {
    question: "WAGMI",
    answer:
      "We’re All Gonna Make It; communal optimism in the crypto community.",
  },
  {
    question: "Whale",
    answer:
      "An investor with a large amount of cryptocurrency, capable of moving the market.",
  },
  {
    question: "Yield Farming",
    answer:
      "Earning interest or rewards by locking up cryptocurrencies, often in DeFi applications.",
  },
];

export default function Dictionary() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-white/10">
          <h2 className="text-lg sm:text-2xl font-bold leading-10 tracking-tight text-white capitalize text-center sm:text-left">
            Frequently used crypto terms
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-gray-300">
            No matter if you're brand new or you just couldn't figure out what
            that word really meant, don't trip we got you covered. Once you're
            done here, you can always learn more by{" "}
            <a
              href="https://t.me/GMEonsol"
              className="font-semibold text-blue-500 hover:text-red-600"
            >
              hitting the Telegram voice chat
            </a>{" "}
            and a member will be happy to help you out.
          </p>
          <dl className="mt-10 space-y-6 divide-y divide-white/10">
            {faqs
              .sort((a, b) => a.question.localeCompare(b.question))
              .map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-300">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
