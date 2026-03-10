import Link from "next/link";

export default function LectureDetailPage({ params }: { params: { slug: string } }) {
  const content = `
    <h1 class="text-3xl font-bold mt-8 mb-2">Savers and Spenders</h1>
    <p class="text-gray-600 mb-6">– the core of financial services industry</p>

    <h2 class="text-2xl font-semibold mt-6 mb-3">Savers</h2>
    <ul class="list-disc pl-6 mb-4">
      <li>have money to invest.</li>
      <li>Individuals, households, companies, and governments</li>
    </ul>

    <h2 class="text-2xl font-semibold mt-6 mb-3">Spenders</h2>
    <ul class="list-disc pl-6 mb-4">
      <li>need money to spend or invest</li>
      <li>Individuals, companies, and governments</li>
    </ul>

    <h2 class="text-2xl font-semibold mt-8 mb-3">Terminology</h2>
    <ul class="list-disc pl-6 mb-4">
      <li>Savers = investors = lenders = providers of capital</li>
      <li>Spenders = borrowers = users of capital</li>
      <li>注: lender & borrower</li>
      <li>Lender是贷款人，也就是将资金借出以此获得利息收入。</li>
      <li>Borrower是借款人，也就是贷款这些资金进行消费或者投资。</li>
    </ul>

    <h2 class="text-2xl font-semibold mt-8 mb-3">a quick check</h2>
    <p class="text-lg mb-4">Can someone be a lender and a borrower at the same time?</p>

    <h2 class="text-2xl font-semibold mt-6 mb-3">Answer for quick check</h2>
    <p class="text-green-600 font-bold text-xl mb-3">Yes!</p>
    <p>A common situation:</p>
    <ul class="list-disc pl-6 mb-4">
      <li>Someone borrows money from a bank (maybe for a trip), so he is a borrower (spender).</li>
      <li>He also saves some money in the bank (maybe he saves his salary), so now he is a lender (saver).</li>
    </ul>

    <h1 class="text-3xl font-bold mt-10 mb-2">Debt and equity</h1>
    <h2 class="text-2xl font-semibold mb-3">Core of financial assets</h2>
    <p>Financial assets that can be traded are called securities（证券）</p>
    <p>Debt securities（债券证券）and equity securities（股权证券）are common in our lives.</p>
    <p>Debt securities: loans that lenders make to borrowers. Lenders expect the borrowers to repay these loans and to make interest payments until the loans are repaid. Bonds is a kind of debt securities.</p>

    <h2 class="text-2xl font-semibold mt-6 mb-3">Core of financial assets</h2>
    <p>A good situation of financial assets</p>
    <p>A new S&T company wants to borrow money from society to do some investment. So, it sells bonds.</p>
    <p>Publics buy bonds and company sells bonds.</p>

    <h2 class="text-2xl font-semibold mt-6 mb-3">Core of financial assets</h2>
    <p>Equity securities are also called stocks（股票）or shares（股份）. Shareholders (also known as stockholders) have ownership in a company.</p>
    
    <p class="font-semibold mb-2">some difference between equity and debt securities</p>
    <ol class="list-decimal pl-6 mb-4">
      <li class="mb-2">
        <span class="font-medium">About principal（本金）</span><br/>
        Debt securities: you must repay.<br/>
        Equity securities: you don't need to do that.
      </li>
      <li class="mb-2">
        <span class="font-medium">About interest/ dividends</span><br/>
        Debt securities: you must pay the interest.<br/>
        Equity securities: you may gain dividends by the company if the company gain returns.
      </li>
    </ol>

    <h1 class="text-3xl font-bold mt-10 mb-2">Direct and indirect finance</h1>
    <h2 class="text-2xl font-semibold mb-3">Two ways for the capital flow</h2>
    
    <p class="font-semibold text-lg mt-4 mb-2">Direct finance:</p>
    <p class="mb-2">lenders provide capital directly to borrowers.</p>
    <p class="mb-2">An example: S&T company sells bonds directly to the public.</p>
    <p class="mb-4">Benefits: increase efficiency.</p>

    <p class="font-semibold text-lg mt-4 mb-2">Indirect finance:</p>
    <p class="mb-2">Lenders provide borrowers with capital through financial intermediaries.</p>
    <p class="mb-2">A classic example is bank.</p>
    <p class="mb-2">Lenders put their money into the bank, and bank gather money to lend to others.</p>
    <p class="mb-4 text-orange-600">🚩 some important financial intermediaries will be told later.</p>

    <h1 class="text-3xl font-bold mt-10 mb-2">Real and financial assets</h1>
    <h2 class="text-2xl font-semibold mb-3">Two types of assets</h2>
    
    <p class="font-semibold mt-4 mb-1">Real assets:</p>
    <p class="mb-2">physical assets, such as land, buildings, and machinery.</p>
    
    <p class="font-semibold mt-4 mb-1">Financial assets:</p>
    <p class="mb-2">claims on real assets or possibly other financial assets, and they frequently come in the form of a certificate or legal contract.</p>
    
    <p class="mt-4 mb-2">Example for financial assets: stocks, debts, options.</p>
    <p class="mb-6">Portfolio: total holdings of his financial assets.</p>
  `;

  return (
    <main className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mt-8 mb-6">
          <Link href="/lecture-review" className="text-blue-600 hover:text-blue-800">
            ← 返回列表
          </Link>
        </div>

        <article className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-3">Lecture 1: Introduction to Finance</h1>
          <p className="text-gray-500 text-lg mb-8">2026-03-10</p>
          
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </article>
      </div>
    </main>
  );
}
