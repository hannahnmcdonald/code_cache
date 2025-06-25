# AWS Certified Cloud Practitioner Study Notes

## Foundations of Cloud Computing (26%)

### Advantages of Cloud Computing
-----------------------------

Virtualization lets you divide hardware resources on a single server into smaller units (Virtual Machines, or VMs)

Usage is placed on a meter- you pay only when you access it and only for what you use

-   On Demand (no long term commitments or up front payments)

-   Pay as you go (hourly or secondly)

6 Advantages to Cloud Computing*

1.  Go global in minutes (Deploy applications around the world in the click of a button)

2.  Stop spending money running and maintaining data centers (You can focus on building your applications instead of managing hardware)

3.  Benefit from massive economies of scale (Volume discounts are passed on to you, which provides lower pay-as-you-go prices)

4.  Increase speed and agility (The provided services allow you to innovate more quickly and deliver your applications faster)

5.  Stop guessing capacity (Capacity matched to your demand)

6.  Trade capital expense for variable expense (Pay for what you use instead of making huge upfront investments)

The benefits of cloud computing:

Elasticity: With elasticity, you don't have to plan ahead of time how much capacity you need. You can provision only what you need, and then grow and shrink based on demand.

High Availability: Highly available systems are designed to operate continuously without failure for a long time. These systems avoid loss of service by reducing or managing failures.

Agility: The cloud gives you increased agility. All the services you have access to help you innovate faster, giving you speed to market.

Durability: Durability is all about long-term data protection. This means your data will remain intact without corruption.

CapEx Vs. OpEx

Capital Expenditures (CapEx)- Upfront purchases towards fixed assets

Operating Expenses (OpEx)- Funds used to run day-to-day operations.

Cloud Computing and Deployment Models
-------------------------------------

Models:

1.  Infrastructure as a Service (IaaS)

-   Fundamental building blocks that can be rented

-   Web hosting through a monthly subscription

1.  Software as a Service (SaaS)

-   A complete application on demand offered to users

-   *Email provider than you can access through a browser is a SaaS

1.  Platform as a Service (PaaS)

-   Used by developers to build and deliver applications without having to install everything (Cloud9)

-   Storefront website, service provider giving you the tools

3 Cloud Deployment Models:

-   Private Cloud- "On Premises" 

-   Exists in your internal data center

-   NO advantages of cloud computing BUT increased security

-   Public Cloud

-   Offered by AWS

-   You aren't responsible for hardware.

-   All advantages of cloud computing

-   Hybrid Cloud

-   Highly sensitive data stored locally, web applications run on AWS

-   AWS provides tools so they can talk to each other (Direct Connect)

Leveraging the AWS Global Infrastructure
----------------------------------------

Region

-   Fully independent and isolated so that if one is impacted, others will not be.

-   Resource and service specific. Regions are isolated and resources aren't automatically replicated across them.

Availability Zone (AZs): One or more physically separated data centers, each with redundant power, networking, and connectivity, housed in separate facilities.

-   Physically separated

-   Connected through low-latency links

-   Fault tolerant

-   Allows for high availability

Edge Locations: cache content for fast delivery to your users

-   Reduce latency & speed up delivery

-   Latency: the amount of time it takes your site to load (Request to response)

-   Low latency is better

Study Tips: 

-   Multi-AZ deployments provide high availability. Systems that are highly available are dependable enough to operate continuously without failure

-   An AZ has multiple data centers (A collection of data centers)

-   A region is global and has 2 or more AZs

-   Edge locations ensure low latency by placing content closer to users. There are more edge locations than regions and AZs

Exploring your AWS Account
--------------------------

The AWS Management Console to manage applications, search & find services.

Root User- MFA first time user ** Best not used to everyday tasks

IAM- Identity and Access Management

Programmatic Access provides access to your AWS resources through an application or a tool like a CLI

1.  CLI- Terminal

2.  Application Code- using SDKs and programmatic calls

3.  SDKs (Software Development Kits)

## Technology (33%)

### Exploring Compute Services


#### EC2

Servers are the physical compute hardware running in a data center

EC2 instances are the virtual servers running on these physical servers

Instances are not considered serverless

EC2

1.  Deploy a database

2.  Deploy a web application

How to access your EC2 instances

1.  AWS Management Console (web browser)

2.  SSH (Secure Shell) **Most Common

1.  Generate a key pair (Private and Public)

2.  Connect via SSH (SSH client locally uses private key and EC2 instance uses public key)

4.  EC2 Instance Connect (EIC)- use IAM policies to control SSH access to your instances without needing the manage SSH keys

5.  AWS Systems Manager allows you to manage your EC2 instances via a web browser or the AWS CLI

EC2 Pricing Options 

1.  On Demand- Fixed price, billed down to second. No contract. Billed for what you use

1.  Use this when 

1.  You care about low cost without any upfront payment or long term commitment 

2.  Your applications have unpredictable workloads that can't be interrupted

3.  Applications under development

4.  Your workloads do not run longer than a year

3.  Fun facts:

1.  You can reserve capacity using On-Demand Capacity Reservations.

2.  The EC2 capacity is held for you whether or not you run the instance.

3.  Spot- Lets you take advantage of the unused EC2 capacity. Your request is only fulfilled if capacity is available ** CHEAPEST

1.  Use this when

1.  You are not concerned about the start or stop time of your application

2.  Your workloads can be interrupted

3.  Your application is only feasible at very low compute prices

3.  Fun Facts:

1.  You can save up to 90% off on-demand prices

2.  You pay the spot price that's in effect at the beginning of each hour

5.  Reserved Instances- Allow you to commit to a specific instance type in a particular region for 1 or 3 years.

1.  Use this when

1.  Your application has steady state usage, and you commit to 1 or 3 years

2.  You can pay money upfront in order to receive a discount on On-Demand prices.

3.  Your application requires a capacity reservation. 

3.  Fun Facts:

1.  You can save up to 75% off On-Demand prices

2.  You are required to sign a contract

3.  You can reserve capacity in an Availability Zone for any duration

4.  You can pay All Upfront, Partial Upfront, or No Upfront. All Upfront for the max term earns the highest discount.

5.  Provides convertible types at 54% discount. 

7.  Dedicated Hosts- Allow you to pay for a physical server that is fully dedicated to running your instances

1.  Use this when

1.  You want to bring your own server-bound software license from vendors like Microsoft or Oracle

2.  You have regulatory or corporate compliance requirements around tenancy model

3.  Fun facts:

1.  You can save up to 70% off On-Demand prices

2.  You bring your existing per-socket, per-core, or per-VM software licenses.

3.  There is no multi-tenancy, meaning the server is not shared with other customers.

4.  A Dedicated Host is a physical server, whereas a Dedicated Instance runs on the host

9.  Saving Plans- Allows you to commit to compute usage (measured per hour) for 1 or 3 years. 

1.  Use this when

1.  You want to lower your bill across multiple compute services

2.  You want the flexibility to change compute services, instance types, operating systems, or Regions.

3.  Fun facts:

1.  You can save up to 72% off On-Demand prices.

2.  You are not making a commitment to a Dedicated Host, just compute usage. 

3.  Savings can be shared across various compute services like EC2, Fargate, Lamda.

4.  This does NOT provide a capacity reservation.

### Lamda

A Serverless Compute Service that lets you run code without managing servers

-   You author application code, called functions, using many popular languages

-   Scales Automatically

-   Serverless means you don't worry about managing servers like with EC2

-   Lamda allows developers to focus on core business logic for apps they are developing instead of worrying about managing servers (Patching, provisions, scaling)

-   Building block for many serverless applications 

-   AWS manages servers for you, and you cannot access them

-   Use Cases:

-   Real time file processing

-   Sending email notifications

-   Backend business logic

-   Features:

-   Supports popular programming languages like Java, Go, Powershell, Node.js, C#, Python, and Ruby

-   You author code using your favorite development environment via console

-   Lambda can execute your code in response to events

-   Lambda functions have a 15 minute time-out

### Additional Compute Services 

#### Fargate 

A serverless compute engine for containers (Similar to Docker)

AWS Fargate is considered serverless and is used to manage containers

-   Scales Automatically

-   Serverless- don't have to worry about provisioning, configuring, or scaling servers

-   Don't need to think about servers or clusters

#### Lightsail

Quickly allows you to launch all the resources you need for small projects

Amazon Lightsail is a compute service that is used to quickly launch pre configured applications for small projects

-   Deploy pre-configured applications like Wordpress websites at the click of a button

-   Simple screens for people with no cloud experience

-   Includes a virtual machine, SSD-based Storage, Data Transfer, DNS management, and a static IP

-   Provides a low, predictable monthly fee, as low as $3.50

** Great for simple workloads, quick deployments, and just starting off with AWS (starting small and helps you grow

#### Outposts

Allows you to run cloud services in your internal data center

AWS Outposts supports a hybrid deployment model

-   Supports workloads that need to remain on-premises due to latency or data sovereignty needs. ** Data sovereignty is also considered data residency- legal, regulatory, contractual requirements that data needs to be in a specific location

-   AWS delivers and installs servers in your internal data center

-   Used for a hybrid experience

-   Has access to the cloud services and APIS to develop apps on-premises

#### Batch

Allows you to process large workloads in smaller chunks or batches (used for longer running jobs)

AWS Batch is a compute service that is used to process large workloads in smaller batches

-   Runs hundred and thousands of smaller batch processing jobs

-   Dynamically provisions instances based on volume

Leveraging Storage Services
---------------------------

### S3

Simple Storage Service

-   Objects or files are stored in buckets (directories)

-   Objects can be public or Private

-   Essentially unlimited storage that can hold millions of objects per bucket

-   S3 is a Regional service but has a global namespace

-   You can upload objects via the console or CLI, or programmatically from within code using SDKs

-   Features:

-   You can set security at the bucket level or individual object level using access control lists (ACLs), bucket policies, or access point policies.

-   You can enable versioning to create multiple versions of your file in order to protect against accidental deletion and to use a previous version

-   You can use S3 access logs to track the access to your buckets and objects

-   S3 is a regional service but bucket names must be globally unique

-   Data Accessibility:

-   Durability: Your objects are never lost or compromised. The S3 standard is designed for 99.99999999% of durability.

-   Availability: You can access your data quickly when you need it. S3 standard is designed for 99.99% availability.

-   S3 Storage Classes:

-   S3 Standard

-   General Purpose Storage

-   Data stored across multiple Availability Zones

-   Low latency and high throughput

-   Recommended for frequently accessed data

-   S3 Intelligent Tiering

-   Automatically moves your data to the most cost-effective storage class

-   Automatic cost savings

-   No retrieval fees

-   Data stored across multiple Availability Zones

-   Recommended for data with unknown or changing access pattern (data lake)

-   S3 Standard Infrequent Access (IA)

-   Data accessed less frequently but requires rapid access

-   Cheaper than S3 standard

-   Data stored across multiple availability zones

-   Recommended for: Long-lived data, infrequent access, rapid access when needed.

-   S3 One Zone-Infrequent Access (IA)

-   Like above, but stored in a single AZ

-   Like above, but costs 20% less

-   Data stored can be lost (Availability of 99.5%)

-   Recommended for: re-creatable data, infrequently accessed with millisecond access, availability and durability not essential

-   S3 Glacier

-   Long-term data storage and archival for lower costs

-   Data retrieval takes longer

-   3 retrieval options: 1-5 minutes, 3-5 hours, or 5-12 hours

-   Data stored across multiple AZ

-   Recommended for: long-term backups, cheaper storage options

-   S3 Glacier Deep Archive

-   Like S3 Glacier but longer access times

-   2 retrieval options: 12 hours or 48 hours

-   Cheapest of all S3 options

-   Data stored across multiple AZ

-   Recommended for: long-term archival accessed once or twice a year, retaining data for regulatory compliance requirements

-   S3 Outposts

-   Provides object storage on-premises

-   A single storage class

-   Store data across multiple devices and servers

-   Recommended for: data that needs to be kept local, demanding application performance needs. 

-   When would you use S3 in the real world: 

-   Static Websites (Cloudfront for global distribution)

-   Analytics System (Redshift & Athena)

-   Data Archive (Archive data using Glacier)

-   Mobile Applications (Mobile apps can upload to S3 bucket)

### Additional Storage Services

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfUruZj0FNE3YU7kK6sEZPLrtAew8PtbB7qSaTTXr7ErnFqW0EZ-6HfhtnXjH4AWuCR3lUGEtDm8mmDR-g41QhCVPb4psTjD23wBOyvC6JpUhPYdNnHX4Yzr7gxuCG-12ix1Yxo?key=HIW88Kb672kZiE67FhGoGg)

EC2 Storage 

1.  Elastic Block Store (EBS)- A storage device (called a volume) that can be attached to (or removed from) your instance

-   Data persists when the instance is not running

-   Tied to ONE AZ

-   Can only be attached to ONE instance in the SAME AZ

-   Recommended for: 

-   Quickly accessible data

-   Running a database on an instance

-   Long-term data storage

1.  EC2 Instance Store- Local storage that is physically attached to the host computer and cannot be removed.

-   Storage on discs physically attached to an instance

-   Faster with higher I/O speeds

-   Storage is temporary since data loss occurs when the EC2 instance is stopped

-   Recommended for:

-   Temporary storage needs

-   Data replicated across multiple instances

1.  Elastic File System (EFS)- A serverless network file system for sharing files

-   Only supports the Linux file system

-   More Expensive than EBS

-   Accessibility across different AZ in the same Region

-   Recommended for:

-   Main directories for business-critical apps

-   Lift-and-shift existing enterprise apps

Storage Gateway- A hybrid storage service

-   Connect on-premises and cloud data

-   Supports a hybrid model

-   Recommended for: 

-   Moving backups to the cloud

-   Reducing costs for hybrid cloud storage

-   Low Latency access to data

AWS Backup- Helps you manage data backups across multiple AWS services

-   Integrates with resources like EC2, EBS, EFS, and more

-   Create a backup plan that includes frequency and retention

Understanding Content Delivery Services
---------------------------------------

A CDN is a mechanism to deliver content quickly and efficiently based on geographic location

-   Amazon Cloudfront- A CDN that delivers data and applications globally with low latency

-   Makes content available globally or restricts it based on location

-   Speeds up delivery of static and dynamic web content

-   Uses Edge Locations to cache content

-   IF content is already in edge location, CloudFront delivers it immediately, otherwise retrieves from origin.![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcsCWOgd1qF5x-Ek4cR2JJ_p84gUshxHZbBeQkImxICqPZt2YbbsWWtQHWHJXWqqCAIfSH3lK6djAQ_IzIhDl4ab2pyPOscLtS3Ouecj8jfy_0bzqZ-2V1OcvRZWspXZAxC1oG75g?key=HIW88Kb672kZiE67FhGoGg)

-   Using CloudFront:

-   S3 Static Websites

-   IP Address Blocking- Geo-restriction prevents users in certain countries from accessing content

-   Prevent attacks- CloudFront can stop certain web attacks, like DDoS

-   Amazon Global Accelerator- sends your users through the AWS global network when accessing your content, speeding up delivery

-   Improves latency and availability of single-region applications

-   Sends traffic through the AWS global network infrastructure

-   60% performance boost

-   Automatically reroutes traffic to healthy available regional endpoints

-   Provides Low Latency

-   Amazon S3 Transfer Acceleration- Improves content uploads and downloads to and from S3 buckets

-   Fast transfer of files over long distances

-   Uses CloudFront's globally distributed edge locations

-   Customers around the world can upload to a central bucket

Understanding Network Services
------------------------------

Networking connects computers together and allows for the sharing of data and applications around the globe in a secure manner using virtual routers, firewalls, and network management services. 

### VPC

Amazon Virtual Private Cloud is a foundational service that allows you to create a secure private network in the AWS cloud where you launch your resources.

-   Private virtual network

-   Launch resources in EC2 instances inside the VPC

-   Isolate and protect resources

-   A VPC spans availability zones in a region

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXc9sQmyWFyUr6b8n4jeWIaU9UesU3VU20a7Hp6rx07vKBsobKHhfXoyn2lD4JhZxctR6dAoAyYSw8c0C5i9SDztDI0k5s8MFE8UdmaVBRnf_evjk-V1xtJZUV-AU7s1RDcz10rFuQ?key=HIW88Kb672kZiE67FhGoGg)

1.  Availability Zone

One or more physically separated data centers, each with redundant power, networking, and connectivity, housed in separate facilities.

-   Physically separated

-   Connected through low-latency links

-   Fault tolerant

-   Allows for high availability

1.  Subnet

-   Allows you to split the network within a VPC

-   Where you launch resources like EC2 instances

3.  VPC

-   A private network in the AWS cloud

5.  NACL

-   Network ACL

-   Access Control Lists (ACL) ensure proper traffic allowed to subnet

7.  Router/Route Table

-   Defines where network traffic is routed

9.  Internet Gateway

-   Allows public traffic to internet from VPC

Peering allows you to connect 2 VPCs together. It facilitates the transfer of data in a secure manner

### Additional Networking Services

-   DNS- Domain Name System. It directs internet traffic by connecting domain names with web servers.

1.  Amazon Route 53- A DNS service that routes users to applications

-   Domain name registration

-   Performs health checks on AWS Resources

-   Supports hybrid cloud architectures

1.  AWS Direct Connect- A dedicated physical network connection from your on-premises data center to AWS

-   Dedicated physical network connection

-   Connects your on-premises data center to AWS

-   Data travels over a private network

-   Supports a hybrid environment

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXf4ne4EEbMLyu3648OvYDqDFUf6tsTE2mdktFh9POsJ3ehHuRcuUKLB0twUHT0coly4jCQRU6r-1p_P6jUWd3hEwkss260V5C3dj_cEfbNqrScL8COUGsWZ4uLveNrFckloHL-c?key=HIW88Kb672kZiE67FhGoGg)

Direct Connect in the real world:

1.  Large Datasets- Transfer large datasets to AWS

2.  Business Critical Data- Transfer internal data directly to AWS, bypassing your internet service provider

3.  Hybrid Model- Build Hybrid environments

3\. AWS VPN- Site-to-Site VPN created a secure connection between your internal networks and your AWS VPCs

-   Similar to Direct Connect, but data travels over the public internet

-   Data is automatically encrypted

-   Connects your on-premises data center to AWS

-   Supports a hybrid environment

Site-to-Site VPN

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeoBSvS_MBlintIVkeh65YCeBQq6_0J79Of83wGzAh6cqq9eRArxSYW3Sb-nfrHrP8XwWflVWDGDfpofd68Vbj0ZYTn2KjUhVj4oWNu_MiqwsHKPY-bHWeqjNDVR2AUOX-V0p-M?key=HIW88Kb672kZiE67FhGoGg)

1.  VPC- The private network within the AWS cloud

2.  Subnet

-   Allows you to split the network within a VPC

-   Where you launch resources like EC2 instances

4.  Availability Zone- One or more physically separated data centers, each with redundant power, networking, and connectivity, housed in separate facilities.

-   Physically separated

-   Connected through low-latency links

-   Fault tolerant

-   Allows for high availability

6.  Router- Defines where network traffic is routed

7.  Virtual Private Gateway- VPN connector on the AWS side

8.  Site-to-Site VPN- The secure connection between internal networks and AWS

9.  Customer Gateway- The VPN connector on the customer side

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcPpf9AKp0AH-DHrZJ7rQD8nzDxNNoW0LS33-uMfVPMx4Zop4hOJ3exZmHB8wrlv3UulhpMeF9lDWBSyy6cssQEUNW29BdsTrlj6bOdWqyTmyK_mQzSimaD7Rwc0ByqFV7O3X_0cA?key=HIW88Kb672kZiE67FhGoGg)

API Gateway

-   Share data between systems

-   Integrate with services like Lambda

Utilizing Databases
-------------------

Databases allow us to collect, sort, retrieve, graph, and manipulate data.

1.  RDS

-   Supports popular database engines

-   Offers high availability and fault tolerance using Multi-AZ deployment option

-   AWS manages the database with automatic software patching, automated backups, operating system maintenance, and more

-   Launch read replicas across regions in order to provide enhanced performance and durability

-   Best option to migrate on-premises Oracle Database to cloud

-   RDS is only for relational databases: 

-   Amazon Aurora

-   PostgreSQL

-   MySQL

-   MariaDB

-   OracleDB

-   SQL Server

1.  Aurora

-   Supports MySQL and PostgreSQL

-   5x faster than normal MySQL and 2x faster than normal PostgresQL

-   Scales automatically while providing durability and high availability

-   Managed by RDS

-   Best option to migrate on-premises PostgreSQL database to cloud (ALSO RDS)

-   ONLY supports MySQL PostgreSQL

3.  DynamoDB

-   NoSQL key value database

-   Fully managed and serverless

-   Non-relational

-   Scales automatically to massive workloads with fast performance

-   NoSQL DB fast enough to handle millions of requests per second

5.  DocumentDB

-   Document database

-   MongoDB compatible

-   Fully managed and serverless

-   Non-relational

-   Best option to operate MongoDB workloads at scale

7.  ElastiCache

-   In-memory datastore

-   Compatible with Redis or Memcached engines

-   Data can be lost

-   Offers high performance and low latency

-   Best option to alleviate database load for data that is accessed often

9.  Neptune

-   Graph database service

-   Supports highly connected databases like social media networks

-   Fully managed and serverless

-   Fast and reliable

-   Best option to process large sets of user profiles and social interactions

Exploring Migration and Transfer Services
-----------------------------------------

Database Migration Services (DMS)

-   Migrate on-premises databases to AWS

-   Continuous data replication

-   Supports homogeneous and heterogeneous migrations

-   Virtually no downtime

Server Migration Service (SMS)

-   Migrate on-premises servers to AWS

-   Server saved as a new Amazon Machine Image (AMI)

-   Use AMI to launch servers as EC2 instances

Snow Family- Allows you to transfer large amounts of on-premises data to AWS using a physical device

1.  Snowcone

1.  Smallest member of data transport devices

2.  8 terabytes of usable storage

3.  Offline shipping

4.  Online with DataSync

3.  Snowball and Snowball Edge

1.  Petabyte-scale data transport solution

2.  Transfer data in and out

3.  Cheaper than internet transfer

4.  Snowball Edge supports EC2 and Lambda

5.  Snowmobile

1.  Multi-petabyte or exabyte scale

2.  Data loaded to S3

3.  Securely Transported

Data Sync- allows for online data transfer from on-premises to AWS storage 

-   Migrates data from on-premises to AWS

-   Copy data over Direct Connect or the internet

-   Copy data between AWS storage services

-   Replicate data cross-region or cross-account

Leveraging Analytics Services
-----------------------------

Data Warehouse- A data storage solution that aggregates massive amounts of historical data from disparate sources

Benefits: Support querying, reporting, analytics, and business intelligence. They are not used for transaction processing

Amazon Redshift- A scalable data warehouse solution

-   Data Warehousing solution

-   Improves speed and efficiency

-   Handles exabyte-scale data

-   When you would use Redshift in the real world:

-   Data Consolidation- when you need to consolidate multiple data sources for reporting

-   Relational Databases- when you want to run a database that doesn't require real-time transaction processing (insert, update, delete)

Analytics- The act of querying or processing your data

1.  Athena- A query service for Amazon S3

-   Query service

-   Analyze S3 data using SQL

-   Pay per query

-   Considered serverless

3.  Glue- prepares your data for analytics

-   Extract, transform, load (ETL) service

-   Prepare and load data

-   Helps to better understand your data

5.  Kinesis- allows you to analyze data and video streams in real time

-   Analyze real-time, streaming data

-   Supports video, audio, application logs, website clickstreams, and IoT

7.  Elastic MapReduce (EMR) - helps you process large amounts of data

-   Process big data

-   Analyze data using hadoop

-   Works with big data frameworks

9.  Data Pipeline- helps you move data between compute and storage services running either on AWS or on-premises

-   Moves data at specific intervals

-   Moves data based on conditions

-   Sends notifications on success or failure

11. Quicksight- helps you visualize your data

-   Build interactive dashboards

-   Embed dashboards in your applications

In the real world- 

1.  Search data in S3- Athena helps you query historical data stored in S3 as if they were relational data using standard SQL

2.  Log analytics- Kinesis helps you analyze logs in near real time for application monitoring or fraud detection

Leveraging Machine Learning Services
------------------------------------

Artificial Intelligence teaches computers to do things that normally require human intelligence.

Businesses leverage AI and machine learning to add intelligence to their applications and leverage trends and patterns in data.

Rekognition- allows you to automate your image and video analysis

-   Image and video analysis

-   Identify custom labels in images and videos

-   Face and text detection in images and videos

Comprehend- a natural-language processing (NLP) service that finds relationships in text

-   Natural-language processing service (NLP)

-   Uncovers insights and relationships

-   Analyzes text

Polly- turns text into speech

-   Mimics natural-sounding human speech

-   Several voices across many languages

-   Can create a custom voice

SageMaker- helps you build, train, and deploy machine learning models quickly

-   Prepare data for models

-   Train and deploy models

-   Provides deep learning AMIs

-   *Companies like Netflix and Amazon use machine learning models to recommend movies and products to buy. SageMaker is a great tool for creating these models

Translate- provides language translation

-   Provides real-time and batch language translation

-   Supports many languages

-   Translates many content formats

-   * Allows you to add localization to your applications to support your diverse user base. Translate supports several popular languages

Lex- helps you build conversational interfaces like chat boxes

-   Recognizes speech and understands language

-   Build highly engaging chatbots

-   Powers Amazon Alexa

Understanding Developer Tools
-----------------------------

Developer Tools used by developers to accelerate software development and the release cycle

1.  Cloud9- allows you to write code within an integrated development environment (IDE) from within your web browser

-   Integrated development environment (IDE)

-   Write and debug code

-   Supports popular programming languages

-   Cloud9 preconfigures the development environment with the needed SDKs and libraries. You can easily write code for your Lambda function directly in your web browser

3.  CodeCommit- a source control system for private Git repositories

-   Create repositories to store code

-   Commit, branch, and merge code

-   Collaborate with other software developers

-   Can be used to manage source code and the different versions of application files. Similar to Github

5.  CodeBuild- allows you to build and test your application source code

-   Compiles source code and runs tests

-   Enables continuous integration and delivery

-   Produces build artifacts ready to be deployed

-   CodeBuild allows you to run as many parallel streams of tests as needed, allowing you to deploy your changes to production more quickly.

7.  CodeDeploy- manages the deployment of code to compute services in the cloud or on-premises

-   Deploys code to EC2, Fargate, Lambda, and on-premises

-   Maintains application uptime

-   Codedeploy eliminated the downtime of your application when deploying a new version due its rolling deployments

9.  CodePipeline- automates the software release process

-   Allows you to implement a CI/CD pipeline

-   Quickly deliver new features and updates

-   Integrates the CodeBuild to run builds and unit tests

-   Integrates with CodeCommit to retrieve source code

-   Integrates with CodeDeploy to deploy your changes

-   When combined with other developer tools, CodePipeline helps development teams implement DevOps practices that automate testing and the movement of code to production

11. X-Ray- helps you debug production applications

-   Analyze the debug production applications

-   Map application components

-   View requests end to end

-   X-Ray can help you map requests made to your RDS database from within your application. You can track information about the SQL queries generated and more

13. CodeStar- helps developers collaboratively work on development projects

-   Developers connect their development environment

-   Integrates with CodeCommit, CodeBuild, and CodeDeploy

-   Contains issue tracking dashboard

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe90IslEBCiZFiGC1x5wsrcQsFgPzXuJKKH-Wv-3HhU0g9MaU6il98-kzY5XefuGPsWy5u-LKVz09PScrJuR9DBGqZDX4jIdZBGgKPutibr-BIKAeJJVH2C524vJjUUm_3zg6AJLg?key=HIW88Kb672kZiE67FhGoGg)

Exploring Deployment and Infrastructure Management Services
-----------------------------------------------------------

Deployment and IT Infrastructure Management help you quickly stand up new applications, automate management of infrastructure, and provide real-time visibility into system health

Infrastructure as Code (IaC)- allows you to write a script to provision AWS resources. The benefit is that you provision resources in a reproducible manner that saves time.

** There is no need to use the S3 Management Console to create a bucket

1.  Cloud Formation- allows you to provision AWS resources using IaC

-   Provides a repeatable process for provisioning resources

-   Works with most AWS services

-   Create templates for the resources you want to provision

-   You can use CloudFormation to automate the create of EC2 instances in your AWS account

3.  Elastic Beanstalk- allows you to deploy your web applications and web services to AWS

-   Orchestration service that provisions resources

-   Automatically handles deployment

-   Monitors application health via a health dashboard

-   After you upload your Java code, Elastic Beanstalk deploys it and handles capacity provisioning, load balancing, and Auto Scaling. Elastic Beanstalk even monitors the health of your application

-   ONLY deploys to cloud, not for on-premises

5.  OpsWorks- allows you to use Chef or Puppet to automate the configuration of your servers and deploy code

-   Deploy code and manage applications

-   Manage on-premises servers or EC2 instances in AWS Cloud

-   Works with Chef and Puppet automation platforms

-   Allows you to define software installation scripts and automate configuration for your application servers

Utilizing Messaging and Integration Services
--------------------------------------------

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfUDg-6FxJBPiR5JtaELGGiY9_2kGM5LmNCs7ROgHjc_BiueV7kBymw7QMwz7Ff5vVjD02ENevVf423MwBTrVNGooF0zCYZp-UPcxYJE5hZNHsLYlMTlZLeCLYo6Ze7dPKtCAUUzQ?key=HIW88Kb672kZiE67FhGoGg)

### SQS

-   SQS- Simple Queue Service, is a messaging queue service that allows you to build loosely coupled systems

-   Allows component-to-component communication using messages

-   Multiple components (or producers) can add messages to the queue

-   Messages are processed in an asynchronous manner

-   SQS lets you build an app that is loosely coupled, allowing components to send, store, and receive messages. The use of a messaging queue helps to improve performance and scalability. 

-   Messages in queue are processed in FIFO order

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXebl_sSGLpowKHBWEaGZNwZx-3eBev03Akvlnyz5RsINv8wdd9lm2d_cuXejiISFMCTzUKRBb0zptPYo83E2XG7EWU1yRu-GUWseKaiQYxzfY6a8yBISzZ5m-CEwXEFF6WydTbKsQ?key=HIW88Kb672kZiE67FhGoGg)

### SNS

SNS- Simple Notification Service- Allows you to send emails and text messages from your applications

-   Send email and text messages

-   Publish messages to a topic

-   Subscribers receive messages

-   SNS in the real world: Send an email when CPU utilization of an EC2 instance goes above 80%. SNS works with Cloudwatch when an alarm's metric threshold is breached to send an email

### SES

Simple Email Service- an email service that allows you to send richly formatted HTML emails from your applications

-   Ideal choice for marketing campaigns or professional emails

-   Unlike SNS, SES sends HTML emails. 

Auditing, Monitoring, and Logging Services
------------------------------------------

These services give you insight into how well your systems are performing and help you proactively find and resolve errors

You can answer many questions using auditing, monitoring, and logging services on AWS:

1.  Who signed in and made changes via the AWS Management Console?

2.  What is the current load on this EC2 instance?

3.  What is the root cause of this application error?

4.  Which execution path resulted in this error?

Services:

1.  CloudWatch- a collection of services that help you monitor and observe your cloud resources

-   Collections metrics, logs, and events

-   Detect anomalies in your environment

-   Set alarms

-   Visualize logs

-   What CloudWatch can do:

-   Alarms: set high resolution alarms

-   Logs: Monitor application logs

-   Metrics: Visualize time series data

-   Events: Trigger an event based on a condition

-   In the real world:

-   Provide real-time monitoring on EC2 instances- CloudWatch can notify you if an EC2 instance goes into the stopped state or usage goes above a certain utilization

-   Receive a notification when root user activity is detected in your account- create a CloudWatch event rule to notify you when root user API calls are detected in your account indicating root user activity

3.  CloudTrail- track user activity and API calls within your account

-   Log and retain account activity

-   Track activity through the console, SDKs, and CLI

-   Identify which user made changes

-   Detect unusual activity in your account

-   In the real world:

-   Track the time a particular event occurred in your account- you can troubleshoot events over the past 90 days using the CloudTrail event history log to find the specific time an event occurred on a per-region basis. You can create a custom trail to extend past 90 days

-   Things you can track with CloudTrail:

1.  Username

2.  Access Key

3.  Event Time & Name

4.  Region

5.  IP Address

6.  Error code

Additional Services
-------------------

1.  Amazon Workspaces- allows you to host virtual desktops in the cloud

-   Virtualize Windows or Linux desktops

-   Enables employees to work from home

2.  Amazon Connect- a cloud contact center service

-   Provides customer service functionality

-   Improves productivity of help desk agents

-   Helps you build a help desk in the cloud

## Security & Compliance (25%)

### Shared Responsibility Model
---------------------------

Security of the Cloud: AWS is responsible for protecting and securing their infrastructure

1.  AWS Global Infrastructure- AWS is responsible for its global infrastructure elements: regions, edge locations, and AZs

2.  Building Security- AWS controls access to its data centers where your data resides

3.  Networking Components- AWS maintains networking components: generators, uninterruptible power supply (UPS) systems, computer room air conditioning (CRAC units), fire suppression systems, and more. 

4.  Software- AWS is responsible for any managed service like RDS, S3, ECS, or Lambda, patching of host operating systems, and data access endpoints

5.  Real world responsibilities:

-   Language versions of Lambda

-   Physically destroying storage media at end of life

-   Managing network infrastructure

-   Updating the firmware on the underlying EC2 hosts

-   Data Center security for physical building

Security in the Cloud: You are responsible for how the services are implements and managing your application data

1.  Application Data- You are responsible for managing your application data, which includes encryption options

2.  Security Configuration- You are responsible for securing your account and API calls, rotating credentials, restricting internet access from your VPCs, and more

3.  Patching- You are responsible for the guest operating system (OS) which includes updates and security patches

4.  Identity and Access Management- You are responsible for application security and identity and access management.

5.  Network Traffic- You are responsible for network traffic protection, which includes security group firewall configuration.

6.  Installed Software- You are responsible for your application code, installed software, and more. You should frequently scan for and patch vulnerabilities in your code. 

7.  Real world responsibilities:

-   Patching the guest operating system for EC2

-   Taking DB backups in RDS

-   Encryption of EBS volumes

-   Ensuring data is encrypted as rest

-   Firewall configuration

EC2 Shared Responsibility Model:

1.  You

-   Installed applications

-   Patching the guest operating system

-   Security controls

3.  AWS

-   EC2 service

-   Patching the host operating system

-   Security of the physical server

Lambda Shared Responsibility Model:

1.  You

-   Security of code

-   Storage of sensitive data

-   IAM for permissions

3.  AWS

-   Lamda service

-   Upgrading Lambda languages

-   Lambda endpoints

-   Operating system

-   Underlying infrastructure

-   Software dependencies

Shared Security Responsibilities:

1.  Patch Management

-   You- Patching guest OS and applications

-   AWS- Patching infrastructure

3.  Configuration Management

-   You- configuring databases and applications

-   AWS- configuring infrastructure devices

5.  Awareness and Training

-   You- your employees

-   AWS- AWS employees

Leveraging the Well-Architected Framework
-----------------------------------------

The 6 pillars of the Well-Architected Framework describe design principles and best practices for running workloads in the cloud:

1.  Operational Excellence

-   Focus on creating applications that effectively support production workloads

-   Plan for and anticipate failure

-   Script operations as code

-   Deploy smaller, reversible changes

-   Learn from failure and refine

3.  Security

-   Focus on putting mechanisms in place that help protect your systems and data

-   Automate security tasks

-   Assign only the least privileges required

-   Encrypt data in transit and at rest

-   Track who did what and when

-   Ensure security at all application layers

5.  Reliability

-   Focus on designing systems that work consistently and recover quickly

-   Recover from failure automatically

-   Scale horizontally for resilience

-   Reduce idle resources

-   Manage change through automation

-   Test recovery procedures

7.  Performance Efficiency

-   Focus on the effective use of computing resources to meet system and business requirements while removing bottlenecks

-   User serverless architectures first

-   Delegate tasks to a cloud vendor

-   Use multi-region deployments

-   Experiment with virtual resources

9.  Cost Optimization

-   Focus on delivering optimum and resilient solutions at the least cost to the user

-   Utilize consumption-based pricing

-   Measure overall efficiency

-   Implement cloud financial management

-   Pay only for resources your application requires

11. Sustainability

-   Focus on environmental impacts, especially energy consumption and efficiency

-   Understand your impact

-   Maximize utilization

-   Establish sustainability goals

-   Use managed services

-   Reduce downstream impact

6 Pillars in the real world:

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXez_Y9Ae5NkUWg_pbVijdp4wXvvGz3LxPqrFGaEp5R_HFD5kIFKZG_b2l6i4bL1MEV02FxC6xfnDQE6sQLlggZCsbZTCZGMzKsN32QmS1-UGteeLeQAToQN1_YprVPhQcDWym7_og?key=HIW88Kb672kZiE67FhGoGg)

Understanding IAM
-----------------

Identity and Access Management (IAM) allows you to control access to your AWS services and resources

-   Helps you secure your cloud resources

-   You define who has access

-   You define what they can do

-   A free global service

-   Identities- Who can access your resource (root user, individual users, groups, roles)

-   Access- What resources can they access (policies, AWS managed policies, customer managed policies, permissions boundaries)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdHHloLRGGDrwINVPzzvTFrzp3o62nC-dCTvuNb6ScAtg5ppxiDeQyJsT7owmGXSCKrYjZQMtQyKnBRJ2SYX_5ZkLOGw4S_-njroj7sE4MPru9__cDK55jIa3DYACJMRwExTINyNQ?key=HIW88Kb672kZiE67FhGoGg)

### IAM Users

Users are entities you create in IAM to represent the person or application needing to access your AWS resources

1.  Root User- Created when you first open your AWS account

-   A root user can close your account, change your email address, or modify your support plan

3.  Individual User- created in IAM and are used for everyday tasks

-   An individual user can perform administrative tasks, access application code, launch EC2 instances, or configure databases

-   * Don't forget activity performed by users in your account is billed to your account!

5.  Applications- You'll create a user in IAM so you can generate access keys for an application running on-premises that needs access to your cloud resource

Principle of Least Privilege involves giving a user the minimum access required to get the job done

Users in the real world: The AWS CLI allows you to access resources in your AWS account through terminal or command window. Access keys are needed when using the CLI and can be generated using IAM.

Groups: A collection of IAM users that help you apply common access controls to group members

1.  Administrators- Perform administrative tasks such as creating new users

2.  Developers- Use compute and database services to build applications

3.  Analysts- Run budget and usage reports

** Groups are users that perform similar tasks, access permissions apply to ALL members of the group, and access is assigned using policies and roles

* DO NOT confuse security groups for EC2 with IAM groups. EC2 groups act as firewalls while IAM groups are a collection of users

### IAM Permissions

Roles- define access permissions and are temporarily assumed by an IAM user or service

1.  You assume a role to perform a task in a single session

2.  Assumed by any user or service that needs it

3.  Access is assigned using policies

4.  You grant users in one AWS account access to resources in another AWS account

5.  Roles in the real world: You can attach a role to an instance that provides privileges to applications running on the instance. Roles help you avoid sharing long term credentials like access keys and protect your instances from unauthorized access

Policies- You manage permissions for IAM users, groups, and roles by creating a policy document in JSON format and attaching it

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXe6Ytcv3-qCFaTOKnxIstSQrXDS6RLDkwKO8lhws2rIyvLe4U2QiudL8UFSH72ZS1pOzc7upUwmtGgTw4EHJk0GCeGZpf1x-1ZSr73aL72zFdpNQig5svNWJZspodp2hY0yd4FaSg?key=HIW88Kb672kZiE67FhGoGg)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd2dk2hqAHPj4WbrYTbp0DyyXvq9J3FlJnoLpNwhe1fV0PVWwCpT6Z0xfoYRTCUKTvzL6nDXTXmeZYQW89PzHi6mVswEegQnIh8WY5Jau1XB6uwq7FM6nwkfgbOgbr9Jf7bidBKJg?key=HIW88Kb672kZiE67FhGoGg)

Policies in the real world: You can add a bucket access policy directly to an Amazon S3 bucket to grant IAM users access permissions for the bucket and the objects in it.

Best IAM Practices:

1.  Enable MFA for privileged users

2.  Implement strong password policies

3.  Create individual users instead of using root

4.  Use roles for Amazon EC2 instances (instead of long term credentials like access keys)

IAM credential report:

-   Lists all users and status of passwords, access keys, and MFA devices

-   Used for auditing and compliance

Exploring Application Security Services
---------------------------------------

Firewalls- prevent unauthorized access to your networks by inspecting incoming and outgoing traffic against security rules you've defined.

WAF- Web Application Firewall

-   Protects apps against common attack patterns

-   Protects against SQL injection

-   Protects against cross-site scripting

-   WAF in the real world:

-   You can deploy a web application directly to an EC2 instance and protect it from cross-site scripting attacks using WAF. You can even deploy WAF on CloudFront as part of your CDN solution to block malicious traffic

DDOS- Distributed Denial of Service

-   DDoS attacks cause a traffic jam on the website or web application in an attempt to cause it to crash

Shield- a managed DDoS protection service

-   Always-on detection

-   Shield Standard is Free (against common and frequently occurring attacks)

-   Shield Advance is a paid service (enhanced protections and 24/7 access to AWS experts for a fee)

-   Supports CloudFront, Route 53, Elastic Load Balancing, AWS Global Accelerator

-   In the real world: Shield advanced will give you notifications of DDoS attacks via CloudWatch metrics. Additionally, with Shield Advanced, you have 24/7 access to AWS Assist

Macie- helps you discover and protect sensitive data

-   Uses machine learning

-   Evaluates S3 environment

-   Uncovers personally identifiable information (PII) like SSNs, passport numbers, and credit card numbers

Exploring Additional Security Services
--------------------------------------

Config- allows you assess, audit, and evaluate the configurations of your resources

-   Track configuration changes over time

-   Delivers configuration history file to S3

-   Notifications via SNS or every configuration change

-   Config in the real world: Allows you to record configuration changes within your EC2 instances. You can view network software, and OS configuration changes, system-level updates and more

GuardDuty- an intelligent threat detection system that uncovers unauthorized behavior

-   Uses machine learning

-   Built-in detection for EC2, S3 and IAM

-   Reviews Cloud Trail, VPC Flow Logs, and DNS logs

-   GuardDuty in the real world: GuardDuty's anomaly detection feature evaluates all API requests in your account and identifies events that are associated with common techniques used by attackers

Inspector- works with EC2 instances to uncover and report vulnerabilities

-   Agent installed on EC instance

-   Reports vulnerabilities found

-   Checks access from internet, remote root login, vulnerable software versions, etc. 

-   Inspector in the real world: has several build-in rules to access your EC2 instances to find vulnerabilities and report them prioritized by level of severity

Artifact- offers on-demand access to AWS security and compliance reports

-   Central repository for compliance reports from third-party auditors

-   Service Organization Controls (SOC) reports

-   Payment Card Industry (PCI) reports

-   Artifact in the real world: provides central repository for AWS' security and compliance reports via self-service portal

Cognito- helps you control access to mobile and web applications

-   Provides authentication and authorization

-   Helps you manage users

-   Assists with user sign-up and sign-in

-   Cognito in the real world: You need to add a social media sign-in to your web application. Cognito provides functionality that allows your users to sign in to your application through social media accounts like Facebook and Google

Utilizing Data Encryption and Secrets Management Services
---------------------------------------------------------

Data encryption encodes data so it cannot be read by unauthorized users

Data in flight- data moving from one location to another

Data at rest- data inactive or stored for later user

KMS- Key Management Service- allows you to generate and store encryption keys

-   Key generator

-   Store and control keys

-   AWS manages encryption keys

-   Automatically enabled for certain services

-   In the real world: Create encrypted Amazon EBS volumes- when you create an encrypted Amazon EBS volume, you're able to specify a KMS customer master key

CloudHSM- a hardware security model (HSM) used to generate encryption keys

-   Dedicated hardware for security

-   Generate and manage your own encryption keys

-   AWS does NOT have access to your keys

-   In the real world: Meet compliance requirements for data security by using dedicated hardware. CloudHSM allows you to meet corporate, contractual, and regulatory compliance requirements for data security by using dedicated hardware in the cloud

SecretsManager- allows you to manage and retrieve secrets (passwords or keys)

-   Rotate, manage, and retrieve secrets

-   Encrypt secrets at rest

-   Integrates with services like RDS, RedShift, and DocumentDB

-   In the real world: retrieve database credentials needed for your application code. SecretsManager allows you retrieve database credentials with a call to Secret Manager APIs, removing the need to hardcode sensitive information in plain text within your application code

## Pricing, Billing, & Governance (16%)

### AWS Pricing
-----------

3 Fundamentals drive cost:

1.  Compute- hourly from launch to termination

2.  Storage- the data you store in the cloud

3.  Outbound Data Transfer- data in flight moving between systems

3 different types of free offers available depending on service:

1.  12 Months Free

2.  Always Free

3.  Trials

EC2 Pricing

1.  On-Demand- by the hour or second without pre-paying

2.  Savings Plan- commit to compute usage measured per hour for a 1- or 3-year term

3.  Reserved Instances- commit to use for 1 or 3 years; pay regardless of usage

4.  Spot Instances- instances only launch if spare capacity is available

5.  Dedicated Hosts- an entire physical server just for you

Lambda Pricing

1.  Number of requests- includes tests invoked from console

2.  Code execution time- from execution start, in response to events, to stop

3.  Always free- 1 million requests per month

S3 Pricing

1.  Storage Class- various storage classes

2.  Storage- Number and size of objects

3.  Data Transfer- data transferred out of S3 Region

4.  Request and Data Retrieval- requests made for data and amount of requests

RDS Pricing

1.  Running clock hours

2.  Type of databases

3.  Storage

4.  Purchase type

5.  Database count

6.  API requests

7.  Deployment type

8.  Data transfer

TCO- Total Cost of Ownership- The financial estimate that helps you understand both the direct and indirect costs of AWS

Application Discovery Service- helps you plan migration projects to the AWS cloud

-   Plan migration projects

-   Used to estimate TCO

-   Works with other services to migrate servers

Ways to reduce your TCO:

1.  Minimize capital expenditures- AWS helps you minimize large capital expenditures, which reduces your TCO

2.  Utilize reserved instances- AWS provides Reserved Instances to help you lock in savings and reduce your TCO

3.  Right size your resources- AWS helps you match the provisioning of resources to your usage needs to reduce your TCO

AWS Price List API

-   Query using JSON or HTML

-   Receive price alerts when prices change

Billing Services
----------------

Budgets- allows you to set custom budgets that alert you when your costs or usage exceed your budgeted amount

-   Improve planning and cost control

-   Cost, usage, and reservation budgets

-   Budget alerts

Budget Types

-   Cost Budgets- Plan how much you want to spend on a service

-   Usage Budgets- Plan how much you want to use on a service

-   Reservation Budgets- Set RIs or savings plan utilization or coverage targets

Cost & Usage Report- contains the most comprehensive set of cost and usage data

-   Aggregate usage data daily, hourly, or monthly level

-   Once set up, can download via S3 console

-   MOST detailed

Cost Explorer- allows you to visualize and forecast your costs and usage over time

-   Visualize costs over time

-   View past 12 months

-   Forecast up to 3 months

-   EC2- can analyze EC2 usage over past 7, 30, or 60 days

Cost Allocation Tags- Useful to track spending

-   Tags allow you to label resources using a key and value pair

-   Tags allow you to track costs via the cost allocation report

AWS Pricing Calculator- Allows you to get an estimate for the cost of AWS services. Comparing service costs per Region is a common use case

Governance Services
-------------------

Governance and management services help you maintain control over cost, compliance, and security across your AWS accounts

Organizations- Allow you to centrally manage multiple AWS accounts under one umbrella

-   Group multiple accounts

-   Single payment for all accounts

-   Automate account creation

-   Allocate resources and apply policies across accounts

-   Benefits:

-   Consolidated Billing- receive one bill for multiple accounts

-   Cost Savings- volume discounts since usage is combined across accounts

-   Account Governance- quick and automated way to create accounts or invite existing accounts

Control Tower- helps you ensure your accounts conform to company-wide policies

-   Helps set up new accounts using a multi-account strategy

-   Works directly with AWS organizations

-   Enforces the best use of services across accounts

-   Provides a dashboard to manage accounts

-   ** Service that provides the easiest way to set up and govern a secure, multi-account AWS environment

Systems Manager- gives visibility and control over your AWS resources

-   Automate operational tasks on your resources

-   Group resources and take action

-   Patch and run commands on multiple EC2 instances or manage RDS instances

-   In the real world: Deploy OS and software patches automatically across a large group of instances. Systems Manager allows you to auto-patch software running on EC2 instances according to a schedule

Trusted Advisor- provides real-time guidance to help you provision your resources following AWS best practices

-   Helps understand best practices

-   Popular Recommendations:

-   Checks for unrestricted access for specific ports on EC2 instances (free)

-   Checks for multi-factor authentication (MFA) on root account (free)

-   Checks S3 bucket permissions to determine if public access (free)

-   Checks IAM password policy (enterprise of business support)

-   Checks for RDS public snapshots (free)

-   Checks for exposed access keys (enterprise or business support)

-   Checks for service usage greater than 80% over service limit (enterprise or business support)

-   Checks for CloudFront content delivery optimization (enterprise or business support)

-   Can check read and write capacity service limits for DynamoDB (reducing overall costs)

License Manager- helps you manage software licenses

-   Manage on-premises and AWS licenses

-   Track licenses for Oracle, Microsoft, SAP, and more

Certificate Manager- helps you provision and manage SSL/TLS certificates

-   Provides public and private certificates for free

-   Integrates with Elastic Load Balancing, API Gateway, and more

Management Services
-------------------

Managed Services help you efficiently operate your AWS infrastructure 

-   Augments your internal staff

-   Provides ongoing management of your infrastructure

-   Reduces operational risks and overhead

-   In the real world: develop application specific health monitoring using CloudWatch. Managed Services can increase your operational efficiency by helping you develop application-specific health monitoring using CloudWatch

Professional Services- help enterprise customers move to a cloud based operating model

-   Implement solutions

-   In the real world: Get help with evaluating an application for migration to the cloud. You can quickly move on-premises applications to the cloud using AWS professional services

AWS Partner Network (APN)- a global community of approves partners that offer software solutions and consulting services for AWS

-   Offers technology partners that provide software solutions

-   Provides consulting partners that offer professional services

-   Find approved vendors with deep AWS expertise

-   AWS recognizes partners and providers from these networks.

Marketplace- a digital catalog of prebuilt solutions you can purchase on license. You may also sell your own solutions to others on the marketplace

-   Buy third-party software

-   Sell solutions to AWS customers

-   Search the catalog of software listings and install with the click of a button

-   In the real world: you can try out an application before making a long-term commitment (some have free trials)

-   AWS recognizes partners and providers from these networks.

Personal Health Dashboard- alerts you to events that might impact your AWS environment

-   Provides troubleshooting guidance

-   Feedback tailored to your specific environment

Support Plans
-------------

There are 4 types of support plans
==================================

1.  Basic (included for free)

-   Account/Billing & Service limit increases

-   24/7 access via email only

3.  Developer (starts at $29/mo and recommended for testing/development)

-   Account/Billing, Service limit increases, & technical support

-   1 primary contact

-   Unlimited cases

-   Cloud Support Associate- business hours via email only

-   Response times <24 hr for general guidance, <12 hr for system impaired

5.  Business (starts at $100/mo and is recommended for production workloads)

-   Account/Billing, Service limit increases, & technical support

-   Unlimited contacts

-   Unlimited cases

-   Full set of trusted advisor checks

-   Cloud Support Engineers- 24/7 access via phone, email, or chat

-   Response times <24 hr for general guidance, <12 hr for system impaired, <4 hr for production system impaired, and <1 hr for production system down

7.  Enterprise (starts at $15,000/mo and is recommended for business or mission--critical production workloads) 

-   Account/Billing, Service limit increases, & technical support

-   Unlimited contacts

-   Unlimited cases

-   Technical Account Manager (TAM)

-   Concierge Support Team

-   Infrastructure Event Management

-   Full set of trusted advisor checks

-   Cloud Support Engineers- 24/7 access via phone, email, or chat

-   Response times <24 hr for general guidance, <12 hr for system impaired, <4 hr for production system impaired, <1 hr for production system down, and < 15 minutes for business critical system down

Support case types:

1.  Account & Billing- Account-related and billing cases can be opened by all customers

2.  Service Limit Increases- default service quote (or limit) increases can be opened by all customers

3.  Technical Support- technical support cases can only be opened by customers on the developer, business, or enterprise plans

** AWS support does NOT allow cases for code development, debugging custom software, or performing system administration tasks