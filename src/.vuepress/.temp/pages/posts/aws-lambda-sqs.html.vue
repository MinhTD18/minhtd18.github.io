<template><div><p>AWS Lambda and AWS SQS are two powerful AWS services that can be used together to create a variety of event-driven applications. Lambda is a serverless compute service that allows you to run code without provisioning or managing servers. SQS is a message queuing service that allows you to decouple applications and scale microservices.</p>
<h3 id="how-do-they-work-together" tabindex="-1"><a class="header-anchor" href="#how-do-they-work-together" aria-hidden="true">#</a> How do they work together?</h3>
<p>Lambda and SQS work together by using Lambda functions to process messages that are sent to SQS queues. When a message is sent to an SQS queue, Lambda can be configured to be triggered to process the message. The Lambda function can then process the message and take any necessary actions, such as storing the message in a database, sending an email, or making a web request.</p>
<h3 id="why-use-them-together" tabindex="-1"><a class="header-anchor" href="#why-use-them-together" aria-hidden="true">#</a> Why use them together?</h3>
<p>There are several reasons why you might want to use Lambda and SQS together. First, Lambda and SQS can help you to create event-driven applications. This means that your applications can respond to events as they occur, without having to be constantly polling for new data. This can help to improve the performance and scalability of your applications.</p>
<p>Second, Lambda and SQS can help you to decouple applications. This means that your applications can be independent of each other, and they can communicate with each other without having to be directly connected. This can help to improve the reliability and maintainability of your applications.</p>
<p>Third, Lambda and SQS can help you to scale microservices. Microservices are small, independent services that can be scaled independently. By using Lambda and SQS, you can distribute messages across multiple Lambda functions, which can help you to scale your microservices horizontally.</p>
<h3 id="sample-code-of-js-v3-aws-sdk" tabindex="-1"><a class="header-anchor" href="#sample-code-of-js-v3-aws-sdk" aria-hidden="true">#</a> Sample Code of JS v3 AWS SDK</h3>
<h4 id="here-is-a-sample-code-of-js-v3-aws-sdk-that-shows-how-to-use-lambda-and-sqs-together" tabindex="-1"><a class="header-anchor" href="#here-is-a-sample-code-of-js-v3-aws-sdk-that-shows-how-to-use-lambda-and-sqs-together" aria-hidden="true">#</a> Here is a sample code of JS v3 AWS SDK that shows how to use Lambda and SQS together:</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token constant">AWS</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"aws-sdk"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> sqs <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AWS<span class="token punctuation">.</span>SQS</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">region</span><span class="token operator">:</span> <span class="token string">"us-east-1"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> lambda <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AWS<span class="token punctuation">.</span>Lambda</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">region</span><span class="token operator">:</span> <span class="token string">"us-east-1"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> queueUrl <span class="token operator">=</span> <span class="token string">"https://sqs.us-east-1.amazonaws.com/123456789012/my-queue"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> functionName <span class="token operator">=</span> <span class="token string">"my-lambda-function"</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> message <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">body</span><span class="token operator">:</span> <span class="token string">"This is a message from Lambda!"</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

sqs<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">QueueUrl</span><span class="token operator">:</span> queueUrl<span class="token punctuation">,</span>
  <span class="token literal-property property">MessageBody</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Message sent!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// Invoke the Lambda function</span>
    lambda<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">FunctionName</span><span class="token operator">:</span> functionName<span class="token punctuation">,</span>
      <span class="token literal-property property">Payload</span><span class="token operator">:</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"Lambda function invoked!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This code first creates a SQS client and a Lambda client. Then, it sends a message to the SQS queue. The message body contains a string that says &quot;This is a message from Lambda!&quot;.</p>
<p>Next, the code invokes the Lambda function. The Lambda function is defined in a separate file, and it simply prints the message body to the console.</p>
<p>Finally, the code logs the results of the SQS sendMessage and Lambda invoke operations.</p>
<h4 id="how-to-run-the-code" tabindex="-1"><a class="header-anchor" href="#how-to-run-the-code" aria-hidden="true">#</a> How to run the code</h4>
<p>To run this code, you will need to create an SQS queue and a Lambda function. You can do this using the AWS Management Console or the AWS CLI.</p>
<p>Once you have created the queue and function, you can run the code by saving it as a .js file and running it from the command line.</p>
<h3 id="for-more-information" tabindex="-1"><a class="header-anchor" href="#for-more-information" aria-hidden="true">#</a> For more information</h3>
<p>For more information on how to use Lambda and SQS together, please see the following documentation:</p>
<ul>
<li>AWS Lambda documentation: <a href="https://docs.aws.amazon.com/lambda/" target="_blank" rel="noopener noreferrer">https://docs.aws.amazon.com/lambda/<ExternalLinkIcon/></a></li>
<li>AWS SDK for JavaScript v3 documentation: <a href="https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/" target="_blank" rel="noopener noreferrer">https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/<ExternalLinkIcon/></a></li>
<li>AWS SQS documentation: <a href="https://docs.aws.amazon.com/sqs/" target="_blank" rel="noopener noreferrer">https://docs.aws.amazon.com/sqs/<ExternalLinkIcon/></a></li>
</ul>
</div></template>


