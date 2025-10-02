var sources = [
  {
    c: `# Azure Compute Resources`,
    q: `You have two Hyper-V hosts named Host1 and Host2. Host1 has an Azure virtual machine named VM1 that was deployed by using a custom Azure Resource Manager template.You need to move VM1 to Host2. What should you do?`,
    a: `    - ( ) From the Update management blade, click Enable.
    - ( ) From the Overview blade, move VM1 to a different subscription.
    - (x) From the Redeploy blade, click Redeploy.
    - ( ) From the Profile blade, modify the usage location.`,
  },
  {
    q: `2. You have downloaded an Azure Resource Manager template to deploy numerous virtual machines. The template is based on a current virtual machine, but must be adapted to reference an administrative password. You need to make sure that the password is not stored in plain text. You are preparing to create the necessary components to achieve your goal.
Which of the following should you create to achieve your goal?.
Answer by choosing the correct option from the list.`,
    a: `    - [x] An Azure Key Vault
    - [ ] An Azure Storage Account 
    - [ ] Azure Active Directory (AD) Identity Protection 
    - [x] An access policy 
    - [ ] An Azure Policy 
    - [ ] A backup policy `,
  },
  {
    q: `Your company has an Azure Kubernetes Service (AKS) cluster that you manage from an Azure AD-joined device. The cluster is located in a resource group.
Developers have created an application named MyApp. MyApp was packaged into a container image.
You need to deploy the YAML manifest file for the application.
Solution: You install the Azure CLI on the device and run the kubectl apply -f myapp.yaml command.
Does this meet the goal?`,
    a: `    - (x) Yes
    - ( ) No`,
  },
  {
    q: `Your company has an Azure Kubernetes Service (AKS) cluster that you manage from an Azure AD-joined device. The cluster is located in a resource group.
Developers have created an application named MyApp. MyApp was packaged into a container image.
You need to deploy the YAML manifest file for the application.
Solution: You install the docker client on the devide and run the docker run -it microsoft/azure-cli:0.10.17 command.
Does this meet the goal?`,
    a: `    - ( ) Yes
    - (x) No`,
  },
  {
    q: ` `,
    a: ` `,
  },
  {
    q: `Your company has a web app named WebApp1. You use the WebJobs SDK to design a triggered App Service background task that automatically invokes a function in the code every time new data is received in a queue. You are preparing to configure the service processes a queue data item.
Which of the following is the service you should use?`,
    a: `    - ( ) Logic Apps
    - (x) WebJobs
    - ( ) Web App
    - ( ) Functions`,
  },
  {
    q: `Your company has an Azure subscription. You need to deploy a number of Azure virtual machines to the subscription by using Azure Resource Manager (ARM) templates. The virtual machines will be included in a single availability set.
You need to ensure that the ARM template allows for as many virtual machines as possible to remain accessible in the event of fabric failure or maintenance.
Which of the following is the value that you should configure for the platformFaultDomainCount property?
        `,
    a: `    - ( ) 10
    - ( ) 30
    - ( ) Min Value
    - (x) Max Value
`,
  },
  {
    q: `Your company has an Azure subscription. You need to deploy a number of Azure virtual machines to the subscription by using Azure Resource Manager (ARM) templates. The virtual machines will be included in a single availability set.
You need to ensure that the ARM template allows for as many virtual machines as possible to remain accessible in the event of fabric failure or maintenance.
Which of the following is the value that you should configure for the platformUpdateDomainCount property?
        `,
    a: `    - ( ) 10
    - (x) 20
    - ( ) 30
    - ( ) 40
`,
  },
  {
    q: `You are developing an e-Commerce Web App. You want to use Azure Key Vault to ensure that sign-ins to the e-Commerce Web App are secured by using Azure App Service authentication and Azure Active Directory (AAD).
What should you do on the e-Commerce Web App?
`,
    a: `    - ( ) Run the az keyvault secret command.
    - ( ) Enable Azure AD Connect.
    - (x) Enable Managed Service Identity (MSI).
    - ( ) Create an Azure AD service principal.
`,
  },
  {
    q: `You develop a Web App on a tier B1 app service plan.
You notice that page load times increase during periods of peak traffic.
You want to implement automatic scaling when CPU load is above 80 percent. Your solution must minimize costs.
What should you do first?
`,
    a: `    - ( ) Enable autoscaling on the Web App.
    - ( ) Switch to the Premium App Service tier plan.
    - (x) Switch to the Standard App Service tier plan.
    - ( ) Switch to the Azure App Services consumption plan.
`,
  },
  {
    q: `You are developing a .NET Core MVC application that allows customers to research independent holiday accommodation providers.
You want to implement Azure Search to allow the application to search the index by using various criteria to locate documents related to accommodation.
You want the application to allow customers to search the index by using regular expressions.
What should you do?
`,
    a: `    - ( ) Configure the SearchMode property of the SearchParameters class.
    - (x) Configure the QueryType property of the SearchParameters class.
    - ( ) Configure the Facets property of the SearchParameters class.
    - ( ) Configure the Filter property of the SearchParameters class.
`,
  },
  {
    q: `aaaa
`,
    a: `    - ( ) Configure the SearchMode property of the SearchParameters class.
    - ( ) Configure the QueryType property of the SearchParameters class.
    - ( ) Configure the Facets property of the SearchParameters class.
    - ( ) Configure the Filter property of the SearchParameters class.
`,
  },
  {
    q: `You are building a software-as-a-service (SaaS) application that analyzes DNA data that will run on Azure virtual machines (VMs) in an availability zone. The data is stored on managed disks attached to the VM. The performance of the analysis is determined by the speed of the disk attached to the VM.
You have the following requirements:
The application must be able to quickly revert to the previous day's data if a systemic error is detected.
The application must minimize downtime in the case of an Azure datacenter outage.
You need to provision the managed disk for the VM to maximize performance while meeting the requirements.
Which type of Azure Managed Disk should you use? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
`,
    a: `    - [x] Disk type: Premium SSD
    - [ ] Disk type: Standard SSD
    - [ ] Disk type: Standard HDD
    - [ ] Redundancy: Geo-redundant storage (GRS)
    - [x] Redundancy: Zone-redundant storage (ZRS)
    - [ ] Redundancy: Locally-redundant storage (LRS)
`,
  },
  {
    q: `You are implementing a software as a service (SaaS) ASP.NET Core web service that will run as an Azure Web App. The web service will use an on-premises
SQL Server database for storage. The web service also includes a WebJob that processes data updates. Four customers will use the web service.
Each instance of the WebJob processes data for a single customer and must run as a singleton instance.
Each deployment must be tested by using deployment slots prior to serving production data.
Azure costs must be mnimized.
Azure resources must be located in an isolated network.
You need to configure the App Service plan for the Web App.
How should you configure the App Service plan? To answer, select the appropriate settings in the answer area.
NOTE: Each correct selection is worth one point.
`,
    a: `    - [ ] Number of VM instances: 2
    - [x] Number of VM instances: 4
    - [ ] Number of VM instances: 8
    - [ ] Number of VM instances: 16
    - [ ] Pricing tier: Consumption
    - [x] Pricing tier: Isolated
    - [ ] Pricing tier: Standard
    - [ ] Pricing tier: Premium
`,
  },
  {
    q: `You develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot.
You need to ensure that scripts run and resources are available before a swap operation occurs.
Solution: Disable auto swap. Update the app with a method named statuscheck to run the scripts. Re-enable auto swap and deploy the app to the Production slot.
Does the solution meet the goal?
`,
    a: `    - (x) Yes
    - ( ) No
`,
  },
  {
    q: `15. You are developing an Azure Web App. You configure TLS mutual authentication for the web app.
You need to validate the client certificate in the web app. To answer, select the appropriate options in the answer area.
`,
    a: `    - [x] Client certificate location: HTTP request header
    - [ ] Client certificate location: Client cookie
    - [ ] Client certificate location: HTTP message body
    - [ ] Client certificate location: URL query string
    - [ ] Encoding type: HTML
    - [ ] Encoding type: URL
    - [ ] Encoding type: Unicode
    - [x] Encoding type: Base64
`,
  },
  {
    q: `Fourth Coffee has an ASP.NET Core web app that runs in Docker. The app is mapped to the www. fourthcoffee.com domain.
Fourth Coffee is migrating this application to Azure.
You need to provision an App Service Web App to host this docker image and map the custom domain to the App Service web app.
A resource group named FourthCoffeePublicWebResourceGroup has been created in the WestUS region that contains an App Service Plan named AppServiceLinuxDockerPlan.
Which order should the CLI commands be used to develop the solution? To answer, move all of the Azure CLI commands from the list of commands to the answer area and arrange them in the correct order.
`,
    a: `    - [x] az webapp create --name $appName --plan AppServiceLinuxDockerPian --resource-group fourthCoffeePublicWebResourceGroup
    - [x] az webapp config container set --docker-custom-image-name $dockerHubContainerPath --name SappName --resource-group fourthCoffeePublicWebResourceGroup
    - [x] az webapp config hostname add --webapp-name SappName --resource-group fourthCoffeePublicWebResourceGroup --hostname $fqdn
`,
  },
  {
    q: `You develop a website. You plan to host the website in Azure. You expect the website to experience high traffic volumes after it is published. You must ensure that the website remains available and responsive while minimizing cost. You need to deploy the website. What should you do?
`,
    a: `    - ( ) Deploy the website to a virtual machine. Configure the virtual machine to automatically scale when the CPU load is high.
    - ( ) Deploy the website to an App Service that uses the Shared service tier. Configure the App Service plan to automatically scale when the CPU load is high.
    - ( ) Deploy the website to a virtual machine. Configure a Scale Set to increase the virtual machine instance count when the CPU load is high.
    - (x) Deploy the website to an App Service that uses the Standard service tier. Configure the App Service plan to automatically scale when the CPU load is high.
`,
  },
  {
    q: `A company is developing a Java web app. The web app code is hosted in a GitHub repository located at https://github.com/Contoso/webapp. The web app must be evaluated before it is moved to production. You must deploy the initial code release to a deployment slot named staging. You need to create the web app and deploy the code.
How should you complete the commands? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
`,
    a: `    - [x] az group create --location centralus --name $resourcegroupname
    - [x] az appservice plan create-name Swebappname --resource-group Sresourcegroupname --sku S3
    - [x] az webapp create --name Swebappname-resource-group $resourcegroupname --plan Swebappname
    - [x] az webapp deployment slot create --name $webappname --resource-group $resourcegroupname --slot staging
    - [x] az webapp deployment source config --name Swebappname --resource-group Sresourcegroupname\ --slot staging-repo-url Sgitrepo --branch master-manual-integration
`,
  },
  {
    q: `You are configuring a new development environment for a Java application.
The environment requires a Virtual Machine Scale Set (VMSS), several storage accounts, and networking components.
The VMSS must not be created until the storage accounts have been successfully created and an associated load balancer and virtual network is configured.
"name": "[format('{0}storage{1}', range(0, parameters('storageCount'))[<value_1>], uniqueString(resourceGroup().id))]",
"<value_2>": {"name": "storagecopy","count": "[length(range(0, parameters('storageCount')))]"},
"<value_3>":  ["[variables(‘loadBalancerName’)]", "[variables(‘*virtualNetworkName')]", "storagesetup"]
`,
    a: `    - [x] copyIndex()
    - [x] copy
    - [x] dependsOn
`,
  },
  {
    q: `You are configuring a development environment for your team. You deploy the latest Visual Studio image from the Azure Marketplace to your Azure subscription.
The development environment requires several software development kits (SDKs) and third-party components to support application development across the organization. You install and customize the deployed virtual machine (VM) for your development team. The customized VM must be saved to allow provisioning of a new team member development environment.
You need to save the customized VM for future provisioning.
Which tools or services should you use? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
`,
    a: `    - [x] Generalize the VM: Azure PowerShell
    - [ ] Generalize the VM: Visual Studio command prompt
    - [ ] Generalize the VM: Azure Migrate
    - [ ] Generalize the VM: Azure Backup
    - [x] Store images: Azure Blob Storage
    - [ ] Store images: Azure Data Lake Storage
    - [ ] Store images: Azure File Storage
    - [ ] Store images: Azure Table Storage
`,
  },
  {
    q: `You are preparing to deploy an Azure virtual machine (VM)-based application.
The VMs that run the application have the following requirements:
When a VM is provisioned the firewall must be automatically configured before it can access Azure resources.
Supporting services must be installed by using an Azure PowerShell script that is stored in Azure Storage.
You need to ensure that the requirements are met.
Which features should you use? To answer, drag the appropriate features to the correct requirements. Each feature may be used once, more than
once, or not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
`,
    a: `    - [x] Firewall configuration: Run Command
    - [ ] Firewall configuration: Serial console
    - [ ] Firewall configuration: Hybrid Runbook Worker
    - [ ] Firewall configuration: Custom Script Extension
    - [ ] Supporting services script: Run Command
    - [ ] Supporting services script: Serial console
    - [ ] Supporting services script: Hybrid Runbook Worker
    - [x] Supporting services script: Custom Script Extension
`,
  },
  {
    q: `A company is developing a Node.js web app. The web app code is hosted in a GitHub repository located at https://github.com/TailSpinToys/webapp.
The web app must be reviewed before it is moved to production. You must deploy the initial code release to a deployment slot named review.
You need to create the web app and deploy the code.
How should you complete the commands? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
`,
    a: `    - [x] $gitrepo="https://github.com/TailSpinToys/webapp", $webappname="TailSpinToysWeb", $location="WestUS2"
    - [x] New-AzResourceGroup -Name myResourceGroup -Location $location
    - [x] New-AzAppServicePlan -Name $webappname -Location $location -ResourceGroupName myResourceGroup -Tier Standard
    - [x] New-AzWebApp -Name $webappname -Location $location -AppServicePlan $webappname -ResourceGroupName myResourceGroup
    - [x] New-AzWebAppSlot -Name $webappname -ResourceGroupName myResourceGroup -Slot review
    - [x] $PropertiesObject = @{repoUrl = "$gitrepo”;branch = "master":}
    - [x] Set-AzResource -PropertyObject $PropertiesObject -ResourceGroupName myResourceGroup -ResourceType Microsoft.Web/sites/slots/sourcecontrols -ResourceName $webappname/review/web -ApiVersion 2015-08-01 -Force
    - [x] Switch-AzWebAppSlot -Name $webappname -ResourceGroupName myResourceGroup
`,
  },
  {
    q: `You are developing an application that needs access to an Azure virtual machine (VM).
The access lifecycle for the application must be associated with the VM service instance.
You need to enable managed identity for the VM.
How should you complete the PowerShell segment? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
`,
    a: `    - [x] $vm = Get-AzVM -ResourceGroupName "ContosoRG" -Name "ContosoVM"
    - [x] Update-AzVM -ResourceGroupName "ContosoRG" -VM $vm -Identityld: $SystemAssigned
`,
  },
  {
    q: `You develop and deploy an Azure App Service API app to a Windows-hosted deployment slot named Development. You create additional deployment slots named Testing and Production. You enable auto swap on the Production deployment slot.
You need to ensure that scripts run and resources are available before a swap operation occurs.
Solution: Update the app with a method named statuscheck to run the scripts. Update the app settings for the app. Set the WEBSITE_SWAP_WARMUP_PING_PATH and WEBSITE_SWAP_WARMUP_PING_STATUSES with a path to the new method and appropriate response codes.
Does the solution meet the goal?`,
    a: `    - (x) Yes
    - ( ) No
`,
  },
  {
    q: `You are developing an ASP.NET Core web application. You plan to deploy the application to Azure Web App for Containers.
The application needs to store runtime diagnostic data that must be persisted across application restarts.
How should you configure the web app's settings?
`,
    a: `    - [ ] App settings: WEBSITE_LOCALCACHE_ENABLED = true
    - [ ] App settings: DOTNET_HOSTING_OPTIMIZATION_CACHE = true
    - [x] App settings: WEBSITES_ENABLE_APP_SERVICE_STORAGE = true
    - [ ] App settings: LOCALAPPDATA = true 
    - [x] App settings: DIAGDATA = /home
    - [ ] App settings: DIAGDATA = /local
    - [ ] App settings: DIAGDATA = D:\home
    - [ ] App settings: DIAGDATA = D:\local
`,
  },
  {
    q: `You are developing a web app that is protected by Azure Web Application Firewall (WAF). All traffic to the web app is routed through an Azure Application
Gateway instance that is used by multiple web apps. The web app address is contoso.azurewebsites.net.
All traffic must be secured with SSL. The Azure Application Gateway instance is used by multiple web apps.
You need to configure the Azure Application Gateway for the web app.
Which two actions should you perform? Each correct answer presents part of the solution.
NOTE: Each correct selection is worth one point.
`,
    a: `    - [x] In the Azure Application Gateway's HTTP setting, enable the Use for App service setting.
    - [ ] Convert the web app to run in an Azure App service environment (ASE).
    - [ ] Add an authentication certificate for contoso.azurewebsites.net to the Azure Application Gateway.
    - [x] In the Azure Application Gateway's HTTP setting, set the value of the Override backend path option to contoso.azurewebsites.net.
`,
  },
  {
    q: `You are developing a web application that runs as an Azure Web App. The web application stores data in Azure SQL Database and stores files in an Azure Storage account. The web application makes HTTP requests to external services as part of normal operations.
The web application is instrumented with Application Insights. The external services are OpenTelemetry compliant.
You need to ensure that the customer ID of the signed in user is associated with all operations throughout the overall system.
What should you do?
`,
    a: `    - (x) Add the customer ID for the signed in user to the CorrelationContext in the web application.
    - ( ) On the current SpanContext, set the Traceld to the customer ID for the signed in user.
    - ( ) Set the header Ocp-Apim-Trace to the customer ID for the signed in user.
    - ( ) Create a new SpanContext with the TraceFlags value set to the customer ID for the signed in user.
`,
  },
  {
    q: `You are authoring a set of nested Azure Resource Manager templates to deploy multiple Azure resources.
The templates must be tested before deployment and must follow recommended practices.
You need to validate and test the templates before deployment.
Which tools should you use? Select one for Determine whether the templates follow recommended practices and another for Test and validate changes that templates will make to the environment.
NOTE: Each correct selection is worth one point.
`,
    a: `    - [ ] Parameter file
    - [ ] Template function
    - [x] Azure Resource Manager test toolkit
    - [ ] User-defined function
    - [x] What-if operation
    - [ ] Azure Deployment Manager
`,
  },
  {
    q: `You develop Azure Web Apps for a commercial diving company. Regulations require that all divers fill out a health questionnaire every 15 days after each diving job starts.
You need to configure the Azure Web Apps so that the instance count scales up when divers are filling out the questionnaire and scales down after they are complete.
You need to configure autoscaling.
What are two possible auto scaling configurations to achieve this goal? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.
`,
    a: `    - [ ] Recurrence profile
    - [ ] CPU usage-based autoscaling
    - [x] Fixed date profile
    - [x] Predictive autoscaling
`,
  },
  {
    c: "# Azure Functions & Logic Apps",
    q: `You are a developer at your company.
You need to update the definitions for an existing Logic App. What should you use?
`,
    a: `    - ( ) The Enterprise Integration Pack (EIP)
    - (x) The Logic App Code View
    - ( ) The API Connections
    - ( ) The Logic Apps Designer
`,
  },
  {
    q: `You are a developer at your company.
You need to edit the workflow for an existing Logic App. What should you use?
`,
    a: `    - ( ) The Enterprise Integration Pack (EIP)
    - ( ) The Logic App Code View
    - ( ) The API Connections
    - (x) The Logic Apps Designer
`,
  },
  {
    q: `You are developing a serverless Java application on Azure. You create a new Azure Key Vault to work with secrets from a new Azure Functions application.
The application must meet the following requirements:
Reference the Azure Key Vault without requiring any changes to the Java code.
Dynamically add and remove instances of the Azure Functions host based on the number of incoming application events.
Ensure that instances are perpetually warm to avoid any cold starts.
Connect to a VNet.
Authentication to the Azure Key Vault instance must be removed if the Azure Function application is deleted.
You need to grant the Azure Functions application access to the Azure Key Vault.
Which three actions should you perform in sequence? To answer, move the appropriate actions from the list of actions to the answer area and arrange them in the correct order.
`,
    a: `    - [ ] Create a user-assigned managed identity for the application.
    - [ ] Create the Azure Functions app with a Premium plan type.
    - [x] Create an access policy in Azure Key Vault for the application identity.
    - [ ] Create an SSL certification in Azure Key Vault for the application identity.
    - [ ] Create the Azure Functions app with an App Service plan type.
    - [x] Create the Azure Functions app with a Consumption plan type.
    - [x] Create a system-assigned managed identity for the application.
`,
  },
  {
    q: `You develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.
The app continues to time out after four minutes. The app must process the blob data.
You need to ensure the app does not time out and processes the blob data.
Solution: Use the Durable Function async pattern to process the blob data.
Does the solution meet the goal?
`,
    a: `    - (x) No
    - ( ) Yes
`,
  },
  {
    q: `You develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.
The app continues to time out after four minutes. The app must process the blob data.
You need to ensure the app does not time out and processes the blob data.
Solution: Pass the HTTP trigger payload into an Azure Service Bus queue to be precessed by a queue trigger function and return an immediate HTTP success response.
Does the solution meet the goal?
`,
    a: `    - ( ) No
    - (X) Yes
`,
  },
  {
    q: `You develop an HTTP triggered Azure Function app to process Azure Storage blob data. The app is triggered using an output binding on the blob.
The app continues to time out after four minutes. The app must process the blob data.
You need to ensure the app does not time out and processes the blob data.
Solution: Configure the app to use an Azure Service hosting plan and enable the Always On setting.
Does the solution meet the goal?
`,
    a: `    - (x) No
    - ( ) Yes
`,
  },
  {
    q: `You are developing an Azure Function App that processes images that are uploaded to an Azure Blob container.
Images must be processed as quickly as possible after they are uploaded, and the solution must minimize latency. You create code to process images when the
Function App is triggered.
You need to configure the Function App. What should you do?
`,
    a: `    - ( ) Use an App Service plan. Configure the Function App to use an Azure Blob Storage input trigger.
    - (x) Use a Consumption plan. Configure the Function App to use an Azure Blob Storage trigger.
    - ( ) Use a Consumption plan. Configure the Function App to use a Timer trigger.
    - ( ) Use an App Service plan. Configure the Function App to use an Azure Blob Storage trigger.
    - ( ) Use a Consumption plan. Configure the Function App to use an Azure Blob Storage input trigger.
`,
  },
  {
    q: `You are preparing to deploy a website to an Azure Web App from a GitHub repository. The website includes static content generated by a script.
You plan to use the Azure Function continuous deployment feature.
You need to run the static generation script before the website starts serving traffic.
What are two possible ways to achieve this goal? Each correct answer presents a complete solution.
NOTE: Each correct selection is worth one point.
`,
    a: `    - [x] Add the path to the static content generation tool to WEBSITE_RUN_FROM_PACKAGE setting in the host.json file.
    - [ ] Add a PreBuild target in the websites csproj project file that runs the static content generation script.
    - [ ] Create a file named run.cmd in the folder /run that calls a script which generates the static content and deploys the website.
    - [x] Create a file named .deployment in the root of the repository that calls a script which generates the static content and deploys the website.
`,
  },
  {
    q: `You are developing an Azure Function app.
The app must meet the following requirements:
Enable developers to write the functions by using the Rust language.
Declaratively connect to an Azure Blob Storage account.
You need to implement the app.
Which Azure Function app features should you use? Choose 2 option below, 1 for: Extension bundle Enable developers to write the functions by using Feature the Rust language, 1 for: Declaratively connect to an Azure Blob Storage Account.
`,
    a: `    - [x] Custom handler
    - [ ] Extension bundle
    - [x] Trigger 
    - [ ] Runtime 
    - [ ] Policy
    - [ ] Hosting plan
`,
  },
  {
    q: `You are developing an Azure Durable Function to manage an online ordering process.
The process must call an external API to gather product discount information.
You need to implement the Azure Durable Function.
Which Azure Durable Function types should you use? Each correct answer presents part of the solution. NOTE: Each correct selection is worth one point.
`,
    a: `    - [x] Orchestrator
    - [x] Entity
    - [ ] Client
    - [ ] Activity 
`,
  },
  {
    q: `You develop Azure Durable Functions to manage vehicle loans.
The loan process includes multiple actions that must be run in a specified order. One of the actions includes a customer credit check process, which may require multiple days to process.
You need to implement Azure Durable Functions for the loan process.
Which Azure Durable Functions type should you use?
`,
    a: `    - [x] Orchestrator
    - [ ] Entity
    - [ ] Client
    - [ ] Activity`,

    c: `# Azure Storage Account`,
  },
  {
    q: `You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure Storage Blob storage. The storage account type is General-purpose V2.
When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.
You need to design the process that starts the photo processing.
Solution: Trigger the photo processing from Blob storage events.
Does the solution meet the goal?
`,
    a: `    - (x) Yes
    - ( ) No
`,
  },
  {
    q: `You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure Storage Blob storage. The storage account type is General-purpose V2.
When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.
You need to design the process that starts the photo processing.
Solution: Update the web.config file to include the applicationinitialization configuration element. Specify custom initialization actions to run the scripts.
Does the solution meet the goal?
`,
    a: `    - ( ) Yes
    - (x) No
`,
  },
  {
    q: `You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure Storage Blob storage. The storage account type is General-purpose V2.
When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.
You need to design the process that starts the photo processing.
Solution: Enable auto swap for the Testing slot. Deploy the app to the Testing slot.
Does the solution meet the goal?`,
    a: `    - ( ) Yes
    - (x) No
`,
  },
  {
    q: `You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure Storage Blob storage. The storage account type is General-purpose V2.
When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.
You need to design the process that starts the photo processing.
Solution: Convert the Azure Storage Account to a BlockBlobStorage storage account.
Does the solution meet the goal?`,
    a: `    - ( ) Yes
    - (x) No
`,
  },
  {
    q: `You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure Storage Blob storage. The storage account type is General-purpose V2.
When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.
You need to design the process that starts the photo processing.
Solution: Move photo processing to an Azure Function triggered form the blob upload.
Does the solution meet the goal?`,
    a: `    - (x) Yes
    - ( ) No
`,
  },
  {
    q: `You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure Storage Blob storage. The storage account type is General-purpose V2.
When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.
You need to design the process that starts the photo processing.
Solution: Create an Azure Function app that uses the comsumption hosting model and that is triggerd form the blob upload.
Does the solution meet the goal?`,
    a: `    - (x) Yes
    - ( ) No
`,
  },
  {
    q: `You develop a software as a service (SaaS) offering to manage photographs. Users upload photos to a web service which then stores the photos in Azure Storage Blob storage. The storage account type is General-purpose V2.
When photos are uploaded, they must be processed to produce and save a mobile-friendly version of the image. The process to produce a mobile-friendly version of the image must start in less than one minute.
You need to design the process that starts the photo processing.
Solution: Use the Azure Blob Storage feed to trigger photo processing.
Does the solution meet the goal?`,
    a: `    - ( ) Yes
    - (x) No
`,
  },
  {
    q: `You are developing an application that uses Azure Blob storage.
The application must read the transaction logs of all the changes that occur to the blobs and the blob metadata in the storage account for auditing purposes. The changes must be in the order in which they occurred, include only create, update, delete, and copy operations and be retained for compliance reasons.
You need to process the transaction logs asynchronously. What should you do?`,
    a: `    - ( ) Process all Azure Blob storage events by using Azure Event Grid with a subscriber Azure Function app.
    - (x) Enable the change feed on the storage account and process all changes for available events.
    - ( ) Process all Azure Storage Analytics logs for successful blob events.
    - ( ) Use the Azure Monitor HTTP Data Collector API and scan the request body for successful blob events.
`,
  },
  {
    q: `You are developing an application to use Azure Blob storage. You have configured Azure Blob storage to include change feeds.
A copy of your storage account must be created in another region. Data must be copied from the current storage account to the new storage account directly between the storage servers.
You need to create a copy of the storage account in another region and copy the data.
In which order should you perform the actions? To answer, move all actions from the list of actions to the answer area and arrange them in the correct order.
    - [x] Create a new template deployment.
    - [x] Export a Resource Manager template.
    - [x] Modify the template by changing the storage account name and region.
    - [x] Deploy the template to create a new storage account in the target region.
    - [x] Use AZCopy to copy the data to the new storage account.
`,
  },
  {
    q: `You are building a website that uses Azure Blob storage for data storage. You configure Azure Blob storage lifecycle to move all blobs to the archive tier after 30 days.
Customers have requested a service-level agreement (SLA) for viewing data older than 30 days.
You need to document the minimum SLA for data recovery.
Which SLA should you use?`,
    a: `    - ( ) at least two days
    - (x) between one and 15 hours
    - ( ) at least one day
    - ( ) between zero and 60 minutes
`,
  },
  {
    q: `You have an application that uses Azure Blob storage.
You need to update the metadata of the blobs.
Which three methods should you use to develop the solution?`,
    a: `    - [x] Metadata.Add
    - [x] SetMetadataAsync
    - [ ] FetchAttributesAsync
    - [ ] UploadFileStream
    - [x] SetPropertiesAsync
`,
  },
  {
    q: `You are maintaining an existing application that uses an Azure Blob GPV1 Premium storage account. Data older than three months is rarely used. Data newer than three months must be available immediately. Data older than a year must be saved but does not need to be available immediately.
You need to configure the account to support a lifecycle management rule that moves blob data to archive storage for data not modified in the last year.
Which three actions should you perform in sequence?`,
    a: `    - [x] Upgrade the storage account to GPV2
    - [x] Copy the data to be archived to a Standard GPV2 storage account and then delete the data from the original storage account
    - [x] Change the storage account access tier from hot to cool
`,
  },
  {
    q: `You have an existing Azure storage account that stores large volumes of data across multiple containers.
You need to copy all data from the existing storage account to a new storage account. The copy process must meet the following requirements: Automate data movement.
Minimize user input required to perform the operation.
Ensure that the data movement process is recoverable.
What should you use?`,
    a: `    - (x) AzCopy
    - ( ) Azure Storage Explorer
    - ( ) Azure portal
    - ( ) .NET Storage Client Library
`,
  },
  {
    c: `# Azure Cosmos Database`,
    q: `1. You are creating an Azure Cosmos DB account that makes use of the SQL API. Data will be added to the account every day by a web application.
You need to ensure that an email notification is sent when information is received from loT devices, and that compute cost is reduced.
You decide to deploy a function app.
Which of the following should you configure the function app to use?. Answer by choosing the correct options from the list.
`,
    a: `    - [ ] Azure Cosmos DB connector
    - [ ] SendGrid action
    - [x] Consumption plan
    - [ ] Azure Event Hubs binding
    - [x] SendGrid binding
`,
  },
  {
    q: `This question requires that you evaluate the underlined text to determine if it is correct.
You company has an on-premises deployment of MongoDB, and an Azure Cosmos DB account that makes use of the MongoDB API.
You need to devise a strategy to migrate MongoDB to the Azure Cosmos DB account.
You include the Data Management Gateway tool in your migration strategy.
Instructions: Review the underlined text. If it makes the statement correct, select "No change required" If the statement is incorrect, select the answer choice that makes the statement correct.
`,
    a: `    - ( ) No change required
    - (x) mongorestore
    - ( ) Azure Storage Explorer
    - ( ) AzCopy
`,
  },
  {
    q: `You have a web service that is used to pay for food deliveries. The web service uses Azure Cosmos DB as the data store.
You plan to add a new feature that allows users to set a tip amount. The new feature requires that a property named tip on the document in Cosmos DB must be present and contain a numeric value.
There are many existing websites and mobile apps that use the web service that will not be updated to set the tip property for some time. How should you complete the trigger?
NOTE: Each correct selection is worth one point.
function ensureTip() {
var r= getContext().getRequest();
var i = r.getBody();
if (isNaN(i)["tip"] || ["tip"] == null) {
i["tip"] = 0;
}
r.setBody(i);
}
`,
    a: `    - ( ) No
    - (x) Yes
`,
  },
  {
    q: `You are developing a solution for a hospital to support the following use cases:
The most recent patient status details must be retrieved even if multiple users in different locations have updated the patient record.
Patient health monitoring data retrieved must be the current version or the prior version.
After a patient is discharged and all charges have been assessed, the patient billing record contains the final charges.
You provision a Cosmos DB NoSQL database and set the default consistency level for the database account to Strong. You set the value for Indexing Mode to Consistent.
You need to minimize latency and any impact to the availability of the solution. You must override the default consistency level at the query level to meet the required consistency guarantees for the scenarios.
Which consistency levels should you implement? To answer, drag the appropriate consistency levels to the correct requirements. Each consistency level may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
NOTE: Each correct selection is worth one point.
`,
    a: `    - [x] Return the most recent patient status: Strong
    - [x] Return health monitoring data that is no less than one version behind: Bounded Staleness
    - [x] After patient is discharged and all charges are assessed, retrieve the correct billing data with the final charges: Eventual
`,
  },
  {
    q: `You develop Azure solutions.
You must connect to a No-SQL globally-distributed database by using the .NET API. You need to create an object to configure and execute requests in the database. Which code segment should you use?`,
    a: `    - [ ] new Container(EndpointUri, PrimaryKey);
    - [ ] new Database(EndpointUri, PrimaryKey);
    - [x] new CosmosClient(EndpointUri, PrimaryKey);
 


`,
  },
  {
    c: "# Azure Container",
    q: `You are developing an application that includes two Docker containers.
The application must meet the following requirements:
The containers must not run as root.
The containers must be deployed to Azure Container Instances by using a YAML file.
The containers must share a lifecycle, resources, local network, and storage volume.
The storage volume must persist through container crashes.
The storage volume must be deployed on stop or restart of the containers.
You need to configure Azure Container Instances for the application.
Which configuration values should you use? To answer, select the appropriate options in the answer area.
NOTE: Each correct selection is worth one point.
`,
    a: `    - [x] Shared lifecycle: Container group
    - [ ] Shared lifecycle: Container image
    - [ ] Shared lifecycle: Service endpoint
    - [ ] Shared lifecycle: Resource group
    - [x] Storage volume: Azure file share
    - [ ] Storage volume: Secret
    - [ ] Storage volume: Empty directory
    - [ ] Storage volume: Cloned Git repo
`,
  },
  {
    q: `You are a developer for a software as a service (SaaS) company that uses an Azure Function to process orders. The Azure Function currently runs on an Azure
Function app that is triggered by an Azure Storage queue.
You are preparing to migrate the Azure Function to Kubernetes using Kubernetes-based Event Driven Autoscaling (KEDA).
You need to configure Kubernetes Custom Resource Definitions (CRD) for the Azure Function.
Which CRDs should you configure? To answer, drag the appropriate CRD types to the correct locations. Each CRD type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
What is the CRD type for Azure Function code
    - ( ) Secret
    - ( ) Azure Function code
    - (x) Deployment
    - ( ) ScaledObject
`,
  },
  {
    q: `You are a developer for a software as a service (SaaS) company that uses an Azure Function to process orders. The Azure Function currently runs on an Azure
Function app that is triggered by an Azure Storage queue.
You are preparing to migrate the Azure Function to Kubernetes using Kubernetes-based Event Driven Autoscaling (KEDA).
You need to configure Kubernetes Custom Resource Definitions (CRD) for the Azure Function.
Which CRDs should you configure? To answer, drag the appropriate CRD types to the correct locations. Each CRD type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
What is the CRD type for Polling interval
`,
    a: `    - ( ) Secret
    - ( ) Azure Function code
    - ( ) Deployment
    - (x) ScaledObject
`,
  },
  {
    q: `You are a developer for a software as a service (SaaS) company that uses an Azure Function to process orders. The Azure Function currently runs on an Azure
Function app that is triggered by an Azure Storage queue.
You are preparing to migrate the Azure Function to Kubernetes using Kubernetes-based Event Driven Autoscaling (KEDA).
You need to configure Kubernetes Custom Resource Definitions (CRD) for the Azure Function.
Which CRDs should you configure? To answer, drag the appropriate CRD types to the correct locations. Each CRD type may be used once, more than once, or not at all. You may need to drag the split bar between panes or scroll to view content.
What is the CRD type for Azure storage connection string
`,
    a: `    - (x) Secret
    - ( ) Azure Function code
    - ( ) Deployment
    - ( ) ScaledObject
`,
  },
  {
    q: `You plan to create a Docker image that runs an ASP.NET Core application named ContosoApp. You have a setup script named setupScript.ps1 and a series of application files including ContosoApp.dll.
You need to create a Dockerfile document that meets the following requirements:
Call setupScripts.ps1 when the container is built.
Run ContosoApp.dll when the container starts.
The Dockerfile document must be created in the same folder where ContosoApp.dll and setupScript.ps1 are stored.
Which five commands should you use to develop the solution?`,
    a: `    - [x] FROM microsoft/aspnetcore:latest
    - [x] WORKDIR /apps/ContosoApp
    - [x] COPY ./ .
    - [x] RUN powershell ./setupScript.ps1
    - [x] CMD ["dotnet", "ContosoApp.dll"]
`,
  },
  {
    c: "# Azure Authen & Author",
    q: `


1. This question requires that you evaluate the underlined text to determine if it is correct.
Your Azure Active Directory Azure (Azure AD) tenant has an Azure subscription linked to it.
Your developer has created a mobile application that obtains Azure AD access tokens using the OAuth 2 implicit grant type.
The mobile application must be registered in Azure AD.
You require a redirect URI from the developer for registration purposes.
Instructions: Review the underlined text. If it makes the statement correct, select "No change is needed." If the statement is incorrect, select the answer choice that makes the statement correct.
`,
    a: `    - (x) No change required.
    - ( ) a secret
    - ( ) a login hint
    - ( ) a client ID
`,
  },
  {
    q: `You manage an Azure SQL database that allows for Azure AD authentication.
You need to make sure that database developers can connect to the SQL database via Microsoft SQL Server Management Studio (SSMS). You also need to make sure the developers use their on-premises Active Directory account for authentication. Your strategy should allow for authentication prompts to be kept to a minimum.
Which of the following should you implement?`,
    a: `    - ( ) Azure AD token.
    - ( ) Azure Multi-Factor authentication.
    - (x) Active Directory integrated authentication.
    - ( ) OATH software tokens.
 


`,
  },
  {
    c: "# Azure Security",
    q: `You are creating an Azure key vault using PowerShell. Objects deleted from the key vault must be kept for a set period of 90 days.
Which two of the following parameters must be used in conjunction to meet the requirement? (Choose two.)
`,
    a: `    - [ ] EnabledForDeployment
    - [x] EnablePurgeProtection
    - [ ] EnabledForTemplateDeployment
    - [x] EnableSoftDelete
`,
  },
  {
    q: `You have an Azure Active Directory (Azure AD) tenant.
You want to implement multi-factor authentication by making use of a conditional access policy. The conditional access policy must be applied to all users when they access the Azure portal.
Which three settings should you configure? To answer, select the appropriate settings in the answer area.
`,
    a: `    - [x] Asignments: Users and groups
    - [x] Assignments: Cloud Apps
    - [ ] Assignments: Conditions
    - [x] Access controls: Grant
    - [ ] Access controls: Session
`,
  },
  {
    q: `You are developing an application to transfer data between on-premises file servers and Azure Blob storage. The application stores keys, secrets, and certificates in Azure Key Vault and makes use of the Azure Key Vault APIs.
You want to configure the application to allow recovery of an accidental deletion of the key vault or key vault objects for 90 days after deletion.
What should you do?`,
    a: `    - ( ) Run the Add-AzKeyVaultKey cmdlet.
    - (x) Run the az keyvault update —enable-soft-delete true -enable-purge-protection true CLI.
    - ( ) Implement virtual network service endpoints for Azure Key Vault.
    - ( ) Run the az keyvault update -enable-soft-delete false CLI.
`,
  },
  {
    c: "# Azure API Management",
    q: `


1. Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.
You are developing a solution for a public facing API.
The API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end.
You must configure back-end authentication for the API Management service instance.
Solution: You configure Basic gateway credentials for the Azure resource.
Does the solution meet the goal?`,
    a: `    - ( ) Yes
    - (x) No
`,
  },
  {
    q: `Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.
You are developing a solution for a public facing API.
The API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end.
You must configure back-end authentication for the API Management service instance.
Solution: You configure Client cert gateway credentials for the HTTP(s) endpoint.
Does the solution meet the goal?`,
    a: `    - ( ) Yes
    - (x) No
`,
  },
  {
    q: `Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.
You are developing a solution for a public facing API.
The API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end.
You must configure back-end authentication for the API Management service instance.
Solution: You configure Basic gateway credentials for the HTTP(s) endpoint.
Does the solution meet the goal?`,
    a: `    - ( ) Yes
    - (x) No
`,
  },
  {
    q: `Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.
You are developing a solution for a public facing API.
The API back end is hosted in an Azure App Service instance. You have implemented a RESTful service for the API back end.
You must configure back-end authentication for the API Management service instance.
Solution: You configure Client cert credentials for the Azure resource.
Does the solution meet the goal?`,
    a: `    - (x) Yes
    - ( ) No
`,
  },
  {
    c: "# Azure Event Grid",
    q: ` 


1. You are developing an application that applies a set of governance policies for internal and external services, as well as for applications.
You develop a stateful ASP.NET Core 2.1 web application named PolicyApp and deploy it to an Azure App Service Web App. The PolicyApp reacts to events from Azure Event Grid and performs policy actions based on those events.
You have the following requirements:
Authentication events must be used to monitor users when they sign in and sign out.
All authentication events must be processed by PolicyApp.
Sign outs must be processed as fast as possible.
What should you do?`,
    a: `    - ( ) Create a new Azure Event Grid subscription for all authentication events. Use the subscription to process sign-out events.
    - ( ) Create a separate Azure Event Grid handler for sign-in and sign-out events.
    - ( ) Create separate Azure Event Grid topics and subscriptions for sign-in and sign-out events.
    - (x) Add a subject prefix to sign-out events. Create an Azure Event Grid subscription. Configure the subscription to use the subjectBeginsWith filter.
`,
  },
  {
    q: `You are developing an Azure solution to collect point-of-sale (POS) device data from 2,000 stores located throughout the world. A single device can produce 2 megabytes (MB) of data every 24 hours. Each store location has one to five devices that send data.
You must store the device data in Azure Blob storage. Device data must be correlated based on a device identifier. Additional stores are expected to open in the future.
You need to implement a solution to receive the device data.
Solution: Provision an Azure Event Grid. Configure the machine identifier as the partition key and enable capture.
Does the solution meet the goal?`,
    a: `    - (x) Yes
    - ( ) No
 


`,
  },
  {
    c: "# Azure Monitoring & Troubleshooting",
    q: `You have developed a Web App for your company. The Web App provides services and must run in multiple regions.
You want to be notified whenever the Web App uses more than 85 percent of the available CPU cores over a 5 minute period. Your solution must minimize costs.
Which command should you use? To answer, select the appropriate settings in the answer area.
NOTE: Each correct selection is worth one point.
az monitor metrics alert create -n myAlert -g myResourceGroup --scopes targetResourcelD --condition <value_1> --<value_2> 5m
`,
    a: `    - [ ] value_1: CPU Usage
    - [ ] value_1: Percentage CPU
    - [x] value_1: avg Percentage CPU
    - [x] value_2: window size
    - [ ] value_2: evaluation-frequency
    - [ ] value_2: auto-mitigate
`,
  },
  {
    q: `Your company's Azure subscription includes an Azure Log Analytics workspace.
Your company has a hundred on-premises servers that run either Windows Server 2012 R2 or Windows Server 2016, and is linked to the Azure Log Analytics workspace. The Azure Log Analytics workspace is set up to gather performance counters associated with security from these linked
servers. You must configure alerts based on the information gathered by the Azure Log Analytics workspace.
You have to make sure that alert rules allow for dimensions, and that alert creation time should be kept to a minimum. Furthermore, a single alert notification must be created when the alert is created and when the alert is resolved.
You need to make use of the necessary signal type when creating the alert rules.
Which of the following is the option you should use?`,
    a: `    - ( ) The Activity log signal type.
    - ( ) The Application Log signal type.
    - (x) The Metric signal type.
    - ( ) The Audit Log signal type.
`,
  },
  {
    q: `You create the following PowerShell script:
$source = New-AzScheduledQueryRuleSource -Query 'Heartbeat | where TimeGenerated > ago(1h)' -DataSourceId “contoso”
$schedule = New-AzScheduledQueryRuleSchedule -FrequencyInMinutes 60 -TimeWindowInMinutes 60
$triggerCondition = New-AzScheduledQueryRuleTriggerCondition -ThresholdOperator "LessThan" -Threshold 5
$aznsActionGroup = New-AzScheduledQueryRuleAznsActionGroup -ActionGroup “contoso” -EmailSubject "Custom email subject” -CustomblebhookPayload "{ ‘"alert'":'"#alertrulename'", ‘"IncludeSearchResults'":true }"
$alertingAction = New-AzScheduledQueryRuleAlertingAction -AznsAction $aznsActionGroup -Severity "3" -Trigger $triggerCondition
New-AzScheduledQueryRule -ResourceGroupName "contoso" -Location "eastus" -Action $alertingAction -Enabled $true -Description "Alert description" -Schedule $schedule -Source $source -Name "Alert Name"
For each of the following statements, select if the statement is true.
`,
    a: `    - [ ] A log alert is created that sends an email when the CPU percentage is above 60 percent for five minutes.
    - [x] A log alert is created that sends an email when the number of virtual machine heartbeats in the past hour is less than five.
    - [ ] The log alert is scheduled to run every two hours.
`,
  },
  {
    c: "# Azure Caching",
    q: ` 


1. Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.
You are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.
You need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.
Solution: You include the use of Azure Redis Cache in your design.
Does the solution meet the goal?`,
    a: `    - ( ) Yes
    - (x) No
`,
  },
  {
    q: `Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.
You are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.
You need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.
Solution: You include the use of Azure Content Delivery Network (CDN) in your design.
Does the solution meet the goal?`,
    a: `    - (x) Yes
    - ( ) No
`,
  },
  {
    q: `Note: The question is included in a number of questions that depicts the identical set-up. However, every question has a distinctive result. Establish if the solution satisfies the requirements.
You are configuring a web app that delivers streaming video to users. The application makes use of continuous integration and deployment.
You need to ensure that the application is highly available and that the users' streaming experience is constant. You also want to configure the application to store data in a geographic location that is nearest to the user.
Solution: You include the use of a Storage Area Network (SAN) in your design.
Does the solution meet the goal?`,
    a: `    - ( ) Yes
    - (x) No
`,
  },
  {
    c: "# API Management",
    q: ` 
`,
  },
  {
    q: `Question: Which of the following components of the API Management service would a developer use if they need to create an account and subscribe to get API keys?
`,
    a: `- [ ] API gateway
- [ ] Azure portal
- [x] Developer portal`,
    n: `Answer:The Developer portal serves as the main web presence for developers, and is where they can subscribe to get API keys.  
The API gateway routes calls, performs API transforms, and verifies keys.  
The Azure portal is the administrative interface where you set up your API program.

        `,
  },
  {
    q: `Question: Which of the following API Management policies would one use if one wants to apply a policy based on a condition ?
            `,
    a: ` - [] forward - request
                - [x] choose
                    - [ ] return-response`,
    n: `Answer:The choose policy applies enclosed policy statements based on the outcome of evaluation of boolean expressions.  
The forward-request policy forwards the incoming request to the backend service specified in the request context.  
The return-response policy aborts pipeline execution and returns either a default or custom response to the caller.

`,
  },
  {
    q: `Question: Your organization offers web services to third-party clients. These services require non-anonymous access, authentication through OpenID Connect, and are accessed via APIs. To ensure secure Entra ID authentication, you decide to base it on a specific value embedded in the request query parameter. Which policy within Azure API Management should you enforce to meet this requirement?
`,
    a: `- [ ] check-header
- [x] validate-jwt
- [ ] set-header
- [ ] control-client-flow`,
    n: `Answer:The JWT Validation or "validate-jwt" policy in Azure API Management is used to validate the JWT (JSON Web Token) extracted from a specified HTTP Header or a URI query parameter. In this scenario, it allows you to securely support Entra ID authentication based on a value passed as a request query parameter. The other options do not provide this specific functionality.

`,
  },
  {
    q: `Question: When attempting to access an API through Microsoft's API Management, a developer receives a '401 Access Denied error'. What could be the possible reasons for this error, and how can it be fixed? Select the correct options.
`,
    a: `- [x] Add the API to product in Azure Portal
- [x] Include the 'Ocp-Apim-Subscription-Key' header in the HTTP request.
- [ ] Add the check-header policy statement for the Authorization header.
- [ ] Disable OAuth2.0 in the API Management gateway.`,
    n: `Answer:The key can be included in the request header as "Ocp-Apim-Subscription-Key" or as a query string "subscription-key." Additionally, the API must be added to a product in the Azure Portal, which applies to a particular product (a collection of APIs) in API Management.

`,
  },
  {
    q: `Question: What rule should be used to cache this URL:'https://myapi.azure-api.net/items/123456'?
`,
    a: `- [x] '<cache-lookup><vary-by-query-parameter /></cache-lookup>'
- [ ] '<cache-lookup><vary-by-query-parameter>itemId</vary-by-query-parameter></cache-lookup>'
- [ ] '<cache-lookup-value key="itemId" />'
- [ ] '<cache-lookup-value value="itemId" />'
- [ ] '<cache-lookup><vary-by-query-parameter>items</vary-by-query-parameter></cache-lookup>'
- [ ] '<cache-lookup-value key="items" />'
- [ ] '<cache-lookup-value value="items" />`,
    n: `Answer:When URL has no parameters to cache on, the whole URL is used (empty 'vary-by-query-parameter').  
'itemId' does not exist. 'items' is not a valid query parameter. 'cache-lookup-value' is for retrieving cached value by name.

`,
  },
  {
    q: `Question: What rule should be used to cache this URL: 'https://myapi.azure-api.net/items?id=123456'?
`,
    a: `- [ ] '<cache-lookup><vary-by-query-parameter>items</vary-by-query-parameter></cache-lookup>'
- [x] '<cache-lookup><vary-by-query-parameter>id</vary-by-query-parameter></cache-lookup>'
- [ ] '<cache-lookup-value key="id" />'
- [ ] '<cache-lookup-value value="id" />'
- [ ] '<cache-lookup-value key="items" />'
- [ ] '<cache-lookup-value value="items" />`,
    n: `Answer:Use 'id' to store the value.  
'items' is not valid query parameter. 'cache-lookup-value' is for retrieving cached value by name.

`,
  },
  {
    q: `Question: What rule should be used to cache this URL: 'https://myapi.azure-api.net/me'?
`,
    a: `- [x] '<cache-lookup><vary-by-header>Authorization</vary-by-header></cache-lookup>'
- [ ] '<cache-lookup><vary-by-query-parameter /></cache-lookup>'
- [ ] '<cache-lookup><vary-by-query-parameter>me</vary-by-query-parameter></cache-lookup>'
- [ ] '<cache-lookup-value key="me" />'
- [ ] '<cache-lookup-value value="me" />'
- [ ] '<cache-lookup-value key="" />'
- [ ] '<cache-lookup-value value="" />`,
    n: `Answer:This looks like user endpoint, 'Authorization' header could be used.

`,
  },
  {
    q: `Question: In what unit is renewal period for Rate limiting / Quota policy?
`,
    a: `- [ ] Milliseconds
- [x] Seconds
- [ ] Minutes
- [ ] Hours
- [ ] Days`,
    n: `Answer:All times are in seconds

`,
  },
  {
    q: `Question: In what unit is the bandwidth limit in Quota policy?
`,
    a: `- [x] KB
- [ ] MB
- [ ] GB`,
    n: `Answer:All sizes are in KB

`,
  },
  {
    q: `Question: You are developing an API that needs to restrict a single client IP address to only 10 calls every minute, with a total of 100 calls and 100 MB of bandwidth per hour. Which policies should you implement to achieve this requirement?
`,
    a: `- [x] '<rate-limit-by-key calls="10" renewal-period="60" counter-key="@(context.Request.IpAddress)" />'
- [ ] '<rate-limit-by-key calls="10" renewal-period="1" counter-key="@(context.Request.IpAddress)" />'
- [ ] '<rate-limit calls="10" renewal-period="60" />'
- [ ] '<rate-limit calls="10" renewal-period="1" />'
- [x] '<quota-by-key calls="100" bandwidth="100000" renewal-period="3600" counter-key="@(context.Request.IpAddress)" />'
- [ ] '<quota-by-key calls="100" bandwidth="100" renewal-period="60" counter-key="@(context.Request.IpAddress)" />'
- [ ] '<quota-by-key calls="100" bandwidth="100" renewal-period="3600" counter-key="@(context.Request.IpAddress)" />'
- [ ] '<quota-by-key calls="100" bandwidth="100000" renewal-period="60" counter-key="@(context.Request.IpAddress)" />'
- [ ] '<quota calls="100" bandwidth="100000" renewal-period="3600" />'
- [ ] '<quota calls="100" bandwidth="100" renewal-period="60" />'
- [ ] '<quota calls="100" bandwidth="100" renewal-period="3600" />'
- [ ] '<quota calls="100" bandwidth="100000" renewal-period="60" />'
- [ ] '<ip-filter action="forbid"><address>"@(context.Request.IpAddress)"</address></ip-filter>'
- [ ] '<ip-filter action="allow"><address>"@(context.Request.IpAddress)"</address></ip-filter>`,
    n: `Answer:'rate-limit-by-key' and 'quota-by-key', units in seconds and KB, 'counter-key="@(context.Request.IpAddress)"`,
  },
  {
    q: `Question: You are working on an API where an end user is authenticated, and you need to generate a throttling key based on information that uniquely identifies that user. The requirement is to limit the calls to 10 every minute, with a total of 100 calls and 100 MB of bandwidth per hour. Which policies should you implement to achieve this requirement?
`,
    a: `- [x] '<rate-limit-by-key calls="10" renewal-period="60" counter-key="@(context.Request.Headers.GetValueOrDefault(\"Authorization\",\"").AsJwt()?.Subject)" />'
- [ ] '<rate-limit-by-key calls="10" renewal-period="1" counter-key="@(context.Request.Headers.GetValueOrDefault(\"Authorization\",\"").AsJwt()?.Subject)" />'
- [ ] '<rate-limit calls="10" renewal-period="60" />'
- [ ] '<rate-limit calls="10" renewal-period="1" />'
- [x] '<quota-by-key calls="100" bandwidth="100000" renewal-period="3600" counter-key="@(context.Request.Headers.GetValueOrDefault(\"Authorization\",\"").AsJwt()?.Subject)" />'
- [ ] '<quota-by-key calls="100" bandwidth="100" renewal-period="60" counter-key="@(context.Request.Headers.GetValueOrDefault(\"Authorization\",\"").AsJwt()?.Subject)" />'
- [ ] '<quota-by-key calls="100" bandwidth="100" renewal-period="3600" counter-key="@(context.Request.Headers.GetValueOrDefault(\"Authorization\",\"").AsJwt()?.Subject)" />'
- [ ] '<quota-by-key calls="100" bandwidth="100000" renewal-period="60" counter-key="@(context.Request.Headers.GetValueOrDefault(\"Authorization\",\"").AsJwt()?.Subject)" />'
- [ ] '<quota calls="100" bandwidth="100000" renewal-period="3600" />'
- [ ] '<quota calls="100" bandwidth="100" renewal-period="60" />'
- [ ] '<quota calls="100" bandwidth="100" renewal-period="3600" />'
- [ ] '<quota calls="100" bandwidth="100000" renewal-period="60" />`,
    n: `Answer:'rate-limit-by-key' and 'quota-by-key', units in seconds and KB, 'counter-key="@(context.Request.Headers.GetValueOrDefault(\"Authorization\",\"").AsJwt()?.Subject)"'.

`,
  },
  {
    q: `Question: An API is integrated into an Azure API Management (APIM) gateway and is utilized by client applications worldwide. You are tasked with granting access to 10 new operations exclusively to a select group of 200 beta developers around the world. How can you enable these developers to test the new operations using the existing API URL?
`,
    a: `- [ ] Implement a revision in Azure API Management.
- [ ] Implement path-based versioning.
- [x] Implement header-based versioning.
- [ ] Implement query string-based versioning.
- [ ] Create separate gateways.`,
    n: `Answer:Header-based versioning uses custom HTTP headers to determine the version of the API to be accessed. This allows different versions of the API to be accessed through the same URL.
`,
  },
  {
    q: `Question: You establish an API Management (APIM) gateway and incorporate an existing App Services API app within it. Your goal is to limit each client application to a maximum of 1000 calls to the API on an hourly basis.". Which policies could achieve this requirement?
`,
    a: `- [x] '<rate-limit-by-key calls="1000" renewal-period="3600" counter-key="@(context.Subscription.Id)" />'
- [ ] '<rate-limit-by-key calls="1000" renewal-period="60" counter-key="@(context.Subscription.Id)" />'
- [ ] '<rate-limit-by-key calls="1000" renewal-period="3600" />'
- [ ] '<rate-limit-by-key calls="1000" renewal-period="60" />'
- [x] '<quota-by-key calls="1000" renewal-period="3600" counter-key="@(context.Subscription.Id)" />'
- [ ] '<quota-by-key calls="1000" renewal-period="60" counter-key="@(context.Subscription.Id)" />'
- [ ] '<quota-by-key calls="1000" renewal-period="3600" />'
- [ ] '<quota-by-key calls="1000" renewal-period="60" />`,
    n: `Answer:'rate-limit-by-key' and 'quota-by-key' can limit numbers of requests.

`,
  },
  {
    q: `Question: You are developing a solution that requires the Azure API Management (APIM) instance to authenticate to a backend service. The authentication process must be secure and aligned with best practices. The backend service supports authentication through specific methods, and you need to ensure that the APIM instance can access it without storing credentials within the APIM configuration. Which of the following policies should you apply to the APIM instance to achieve this requirement?
`,
    a: `- [x] authentication-managed-identity
- [ ] validate-jwt
- [ ] check-header
- [ ] set-body`,
    n: `Answer:By using a authentication-managed-identity identity, you can authenticate to services that support Entra ID authentication without credentials in your code. In this scenario, it allows the APIM instance to authenticate to the backend service securely.

`,
  },
  {
    q: `Question: Your organization has implemented Azure API Management (APIM) and requires a custom TLS/SSL certificate for securing communication. The certificate must be obtained from Azure Key Vault, and the process must adhere to security best practices without hardcoding any secrets or credentials in the APIM configuration. Which of the following policies should you apply to the APIM instance to fulfill this requirement?
`,
    a: `- [x] authentication-managed-identity
- [ ] validate-jwt
- [ ] check-header
- [ ] set-body`,
    n: `Answer:By using a authentication-managed-identity identity, the APIM instance can authenticate to Azure Key Vault and retrieve the custom TLS/SSL certificate securely without needing to store any credentials in the code or configuration.

`,
  },
  {
    q: `Question: You have JSON endpoint that expects JSON payload. The client sends XML payload. What policy should be applied?
`,
    a: `- [x] 'xml-to-json-policy' in inbound section
- [ ] 'xml-to-json-policy' in backend section
- [ ] 'xml-to-json-policy' in outbound section
- [ ] 'json-to-xml-policy' in inbound section
- [ ] 'json-to-xml-policy' in backend section
- [ ] 'json-to-xml-policy' in outbound section
- [ ] No policy should be applied`,
    n: `Answer:Request is transformed in inbound section

`,
  },
  {
    q: `Question: You have JSON endpoint. The client expexts XML response. What policy should be applied?
`,
    a: `
- [ ] 'xml-to-json-policy' in inbound section
- [ ] 'xml-to-json-policy' in backend section
- [ ] 'xml-to-json-policy' in outbound section
- [ ] 'json-to-xml-policy' in inbound section
- [ ] 'json-to-xml-policy' in backend section
- [x] 'json-to-xml-policy' in outbound section
- [ ] No policy should be applied`,
    n: `Answer:Response is transformed in outbound section

`,
  },
  {
    q: `Question: You receive '401 Access Denied' trying to get access to your API instance. What is happening?
`,
    a: `- [ ] Server crashed
- [x] You have to pass a valid subscription key.
- [ ] Quota has been exceeded
- [ ] IP Filter policy has been activated`,
    n: `Answer:Pass a valid subsription key.  
Server errors are '5XX', quota and ip restrictions are '403'.

`,
  },
  {
    q: `Question: You receive '403 Forbidden' trying to get access to your API instance. What are possible reasons for that?
`,
    a: `- [ ] Server crashed
- [ ] You have to pass a valid subscription key.
- [x] Quota has been exceeded
- [x] IP Filter policy has been activated`,
    n: `Answer:Quota and ip restrictions are '403'.  
Server errors are '5XX', Subscription errors are '401'

`,
  },
  {
    q: `Question: Your client, once again, complains they receive a '403 Forbidden' error when trying to access your API. It was working just 5 minutes ago, they claim. You look into this "urgent" problem and see no policy changes have been made, and surprise, surprise, it works on your machine(tm). How would you make client to shut up and be happy?
`,
    a: `- [ ] The API endpoint must be faulty, so just remove it for now and debug it later, like everything else
- [ ] Add an 'ip-filter' policy that allows access to your client's IP, because that's never been a problem before
- [ ] Call them idiots (in your head, of course) and tell them to use a different subscription key, like you've told them a hundred times
- [x] Modify the quota policy to be more generous, because probably they have been spamming your endpoint`,
    n: `Answer:A '403 Forbidden' error is either an IP filter policy or an exceeded quota. Since policy rules haven't been modified, it must be a quota issue.  
Note: Cursing your clients (in your mind) is a valid/invalid solution, depending on your morals.

`,
  },
  {
    q: `Question: You are setting up an API Management instance to manage your organization's various API services. You have a REST API developed in-house that is already exposed to the public internet. What is the first step you should take before incorporating this REST API into the API Management instance?
`,
    a: `- [ ] Establish a VPN connection between the in-house network and Azure.
- [x] Generate OpenAPI specification for the REST API.
- [ ] Move the API to Azure Functions.
- [ ] Implement OAuth 2.0 authentication for the API.
- [ ] Set up a load balancer for the API in Azure.
- [ ] Set up a self-hosted gateway between the internal network and Azure.`,
    n: `Answer:OpenAPI specification enables Azure API Management to automatically discover the endpoints and methods supported by the API.

`,
  },
  {
    q: `Question: Your company has a complex environment with APIs hosted both on-premises and in different cloud providers. You are tasked with centralizing the management of these APIs using Azure API Management, while ensuring low-latency access for local users. What actions should you take to accomplish this task?
`,
    a: `- [x] Upgrade to the Premium tier of Azure API Management.
- [x] Implement a self-hosted gateway to manage on-premises APIs and APIs across multiple clouds.
- [ ] Migrate all APIs to Azure App Service.
- [ ] Generate OpenAPI specifications for all APIs.
- [ ] Configure a VPN connection between the internal network and Azure.`,
    n: `Answer:The Premium tier is required to deploy self-hosted gateways, which are essential for managing APIs across different environments. Self-hosted gateways are containerized versions of managed gateways, suitable for hybrid and multicloud environments.  
Migrating all APIs to Azure App Service is not necessary for managing APIs across different environments.  
Generating OpenAPI specifications is not directly related to managing APIs across multiple clouds and on-premises.  
Configuring a VPN connection is not relevant to the scenario described.

Here's the modified question using generic Azure CLI commands instead of PowerShell:
Your team has developed an application API based on the OpenAPI specification. You have to ensure that the API can be accessed via an Azure API management service instance. Which of the following Azure CLI commands would you run?
`,
    a: `
- [ ] 'az apim api import'
- [ ] 'az apim backend create'
- [x] 'az apim create'
- [ ] 'az apim backend proxy create`,
    n: `Answer:First, you need to create a new API management instance using 'az apim create'.  
'az apim api import' imports an API into an existing API Management service instance.  
'az apim backend create' creates a new backend entity in API Management.
'az apim backend proxy create' is for creating a proxy backend, not an API Management instance.

`,
  },
  {
    q: `Question: In a company's API system hosted behind an Azure API Management service, you are tasked with implementing response caching. The user ID of the client must first be detected and saved. Then, the response must be cached specifically for that saved user ID. What types of policies should be used to accomplish this task?
`,
    a: `- [ ] Inbound policy only
- [ ] Outbound policy only
- [x] Both inbound and outbound policies
- [ ] Backend policy only
- [ ] Global policy only`,
    n: `Answer:Both inbound and outbound policies
- Inbound Policy: The inbound policy is used to extract and save the user ID from the incoming request. The '<set-variable>' policy is used to save the user ID, and the '<cache-lookup>' policy with a custom key is used to check if a cached response exists for that user ID.
- Outbound Policy: The outbound policy is used to store the response in the cache. The '<cache-store>' policy with a custom key is used to cache the response specifically for the saved user ID.
Therefore, both inbound and outbound policies are needed to meet the requirements.

`,
  },
  {
    q: `Question: A company uses Azure API Management to publish APIs for external consultants. The API needs to forward the user ID associated with the subscription key to the back-end service. Which type of policy should be used for this requirement?
`,
    a: `- [x] Inbound
- [ ] Outbound
- [ ] Backend
- [ ] Error`,
    n: `Answer:Forwarding the user ID that is associated with the subscription key to the back-end service would be done in an inbound policy.
xml
<policies>
    <inbound>
        <set-header name="x-user-id" exists-action="override">
            <value>@(context.Subscription.Id)</value>
        </set-header>
    </inbound>
</policies>

 

`,
  },
  {
    c: "# Azure App Configuration",
    q: `Question: Which type of encryption does Azure App Configuration use to encrypt data at rest?
`,
    a: `- [ ] 64-bit AES
- [ ] 128-bit AES
- [x] 256-bit AES`,
    n: `Answer:Azure App Configuration encrypts sensitive information at rest using a 256-bit AES encryption key provided by Microsoft.

`,
  },
  {
    q: `Question: Which of the following options evaluates the state of a feature flag?
`,
    a: `- [ ] Feature flag
- [ ] Feature manager
- [x] Filter`,
    n: `Answer:A filter is a rule for evaluating the state of a feature flag. A user group, a device or browser type, a geographic location, and a time window are all examples of what a filter can represent.  
A feature manager is an application package that handles the lifecycle of all the feature flags in an application.  
A feature flag is a variable with a binary state of on or off.

`,
  },
  {
    q: `Question: What is the primary difference between Azure App Configuration and Azure Key Vault in terms of encryption?
`,
    a: `- [ ] App Configuration does not support encryption at rest.
- [ ] App Configuration does not support encryption at transit.
- [x] App Configuration does not support hardware-level encryption.`,
    n: `Answer:Azure Key Vault offers hardware-level encryption (available in Premium tier), while Azure App Configuration does not.

`,
  },
  {
    q: `Question: Which of the following features is NOT provided by Azure App Configuration?
`,
    a: `- [ ] Real-time control of feature availability.
- [ ] Dynamic application settings adjustments without redeployment or restart.
- [x] Granular access policies.
- [ ] Hierarchical configuration data management.
- [ ] Capability to import and export configuration information between Azure App Configuration and separate files.`,
    n: `Answer:Azure App Configuration does not offer granular access policies, unlike Key Vault.

`,
  },
  {
    q: `Question: In Azure App Configuration, when loading configuration and using multiple '.Select()' calls, how does the order of these calls affect the values that are used if a key with the same name exists in both labels? Consider the following code snippet used to load configuration from Azure App Configuration:
csharp
builder.Configuration.AddAzureAppConfiguration(options =>
{
    options.Connect(connectionString)
           // Select a subset of the configuration keys
           .Select("TestApp:*", LabelFilter.Null)
           .Select("TestApp:*", "dev");
});

- [ ] Only the last '.Select()' is considered. Values with keys starting with "TestApp:" and the label "dev" will be used; all values with no label will be discarded.
- [ ] Only the first '.Select()' is considered. Values with keys starting with "TestApp:" and the label "dev" will not be loaded.
- [ ] Both labeled and unlabeled values will be merged; if the same key exists in both, only the value from the first '.Select()' (no label) will be considered, and "dev" will not override them.
- [x] Both labeled and unlabeled values will be merged; if the same key exists in both, values from the last 'Select()' ("dev" label) will override the existing (no label).
- An exception will be thrown`,
    n: `Answer:Merge and override previous values

 

`,
  },
  {
    c: "# Azure App Service",
    q: `Question: Which of the following networking features of App Service can be used to control outbound network traffic?
`,
    a: `- [ ] App-assigned address
- [x] Hybrid Connections
- [ ] Service endpoints`,
    n: `Answer:Hybrid Connections are an outbound network feature.

`,
  },
  {
    q: `Question: Which of the following networking features of App Service are outbound?
`,
    a: `- [ ] App-assigned address
- [x] Hybrid Connections
- [ ] Service endpoints
- [x] Virtual network integration
- [x] Gateway-required virtual network integration
- [ ] Access restrictions
- [ ] Private endpoints`,
    n: `Answer:What's listed.

`,
  },
  {
    q: `Question: Which of the following networking features of App Service are inbound?
`,
    a: `- [x] App-assigned address
- [ ] Hybrid Connections
- [x] Service endpoints
- [ ] Virtual network integration
- [ ] Gateway-required virtual network integration
- [x] Access restrictions
- [x] Private endpoints`,
    n: `Answer:What's listed.

`,
  },
  {
    q: `Question: When would you use the App-assigned address feature?
`,
    a: `- [ ] To access an on-premises database server.
- [x] To support IP-based SSL for your app.
- [ ] To access resources in your Azure virtual network.
- [ ] To restrict access to your app from a set of well-defined IP addresses.
- [x] To support a dedicated inbound address for your app.`,
    n: `Answer:To support IP-based SSL for your app, To support a dedicated inbound address for your app.

`,
  },
  {
    q: `Question: When would you use Access restrictions feature?
`,
    a: `- [x] To restrict access to your app from a set of well-defined IP addresses.
- [ ] To access an on-premises system securely.
- [ ] To access resources in your Azure virtual network.
- [ ] To support IP-based SSL for your app.
- [ ] To restrict access to your Azure Service Resources to only your virtual network.`,
    n: `Answer:To restrict access to your app from a set of well-defined IP addresses.

`,
  },
  {
    q: `Question: When would you use Service endpoints/Private endpoints feature?
`,
    a: `- [x] To restrict access to your Azure Service Resources to only your virtual network.
- [ ] To support IP-based SSL for your app.
- [ ] To access an on-premises system securely.
- [ ] To access resources in your Azure virtual network or on-premises network over ExpressRoute or site-to-site VPN.
- [ ] To restrict access to your app from a set of well-defined IP addresses.`,
    n: `Answer:To restrict access to your Azure Service Resources to only your virtual network.

`,
  },
  {
    q: `Question: When would you use Private endpoints features?
`,
    a: `- [x] To restrict access to your Azure Service Resources to only your virtual network.
- [x] To expose your app on a private IP in your virtual network
- [ ] To support IP-based SSL for your app.
- [ ] To access an on-premises system securely.
- [ ] To access resources in your Azure virtual network or on-premises network over ExpressRoute or site-to-site VPN.
- [ ] To restrict access to your app from a set of well-defined IP addresses.`,
    n: `Answer:To restrict access to your Azure Service Resources to only your virtual network; to expose your app on a private IP in your virtual network.

`,
  },
  {
    q: `Question: When would you use Hybrid Connections feature?
`,
    a: `- [x] To access an on-premises system or service securely.
- [ ] To restrict access to your app from a set of well-defined IP addresses.
- [ ] To support IP-based SSL for your app.
- [ ] To restrict access to your Azure Service Resources to only your virtual network.
- [ ] To access resources in your Azure virtual network.`,
    n: `Answer:To access an on-premises system or service securely.

`,
  },
  {
    q: `Question: When would you use Gateway-required virtual network integration feature?
`,
    a: `- [x] To access resources in your Azure virtual network or on-premises network over ExpressRoute or site-to-site VPN.
- [ ] To restrict access to your Azure Service Resources to only your virtual network.
- [ ] To support IP-based SSL for your app.
- [ ] To access an on-premises system securely.
- [ ] To support a dedicated inbound address for your app.`,
    n: `Answer:To access resources in your Azure virtual network or on-premises network over ExpressRoute or site-to-site VPN.

`,
  },
  {
    q: `Question: When would you use Virtual network integration feature?
`,
    a: `- [x] To access resources in your Azure virtual network.
- [ ] To restrict access to your app from a set of well-defined IP addresses.
- [ ] To access an on-premises system securely.
- [ ] To support IP-based SSL for your app.
- [ ] To restrict access to your Azure Service Resources to only your virtual network.`,
    n: `Answer:To access resources in your Azure virtual network.

`,
  },
  {
    q: `Question: In which of the following app configuration settings categories would you set the language and SDK version?
`,
    a: `- [ ] Application settings
- [ ] Path mappings
- [x] General settings`,
    n: `Answer:General Settings is used to configure stack, platform, debugging, and incoming client certificate settings.

`,
  },
  {
    q: `Question: By default, all client requests to the app's production URL ('http://<app_name>.azurewebsites.net') are routed to the production slot. One can automatically route a portion of the traffic to another slot. What is the default routing rule applied to new deployment slots?
`,
    a: `- [x] 0%
- [ ] 10%
- [ ] 20%
- [ ] 50%`,
    n: `Answer:By default, new slots are given a routing rule of '0%'

`,
  },
  {
    q: `Question: Some configuration elements follow the content across a swap (not slot specific), whereas other configuration elements stay in the same slot after a swap (slot specific). Which of the following settings are swapped?
`,
    a: `- [ ] Publishing endpoints
- [x] WebJobs content
- [ ] WebJobs schedulers`,
    n: `Answer:WebJobs content is swapped.

`,
  },
  {
    q: `Question: Suppose you are a developer tasked with deploying a new .NET web application using on Microsoft Azure. Your first task is to create a new resource group 'myResourceGroup' located in the South Central US region. Following that, you need to establish a deployment user for the web application. You are then required to create 'myAppServicePlan' App Service plan within a Linux environment that is cost-efficient. The web application should be created within this resource group and App Service plan, using .NET as its runtime. You are also required to configure the application settings to set the deployment branch to 'main'. Lastly, you are provided with a sample application from GitHub:'https://github.com/Azure-Samples/App-Service-Troubleshoot-Azure-Monitor'. You need to clone this application, rename the default branch to 'main', add the Azure remote repository using the URL from the webapp create command, and push the code to the Azure repository. How would you accomplish these tasks using Azure CLI commands?
ps
# Code here

Answer:
ps
# Create a new resource group in the South Central US region
az group create --name myResourceGroup --location "South Central US"
# Set up a deployment user for the web application
az webapp deployment user set --user-name <username> --password <password>
# Create an App Service plan with a Linux environment. The SKU B1 is chosen for its cost efficiency.
az appservice plan create --name myAppServicePlan --resource-group myResourceGroup --sku B1 --is-linux
# Create the web application within the resource group and the App Service plan, using .NET as its runtime
az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name MyApp --runtime "DOTNET|6.0" --deployment-local-git
# Capture the Git URL from the output of the previous command
git_url=$(az webapp show --name MyApp --resource-group myResourceGroup --query gitUrl --output tsv)
# Configure the application settings to set the deployment branch to 'main'
az webapp config appsettings set --name MyApp --resource-group myResourceGroup --settings DEPLOYMENT_BRANCH='main'
# Clone the sample application from GitHub
git clone https://github.com/Azure-Samples/App-Service-Troubleshoot-Azure-Monitor
# Navigate into the cloned repository
cd App-Service-Troubleshoot-Azure-Monitor
# Rename the default branch to 'main'
git branch -m main
# Add the Azure remote repository using the URL from the webapp create command
git remote add azure $git_url
# Push the code to the Azure repository
git push azure main


`,
  },
  {
    q: `Question: You're an Azure developer with the task of deploying a PHP web app from a GitHub repo to Azure App Services. As a part of your workflow, you want to test the new features of your app in a safe, isolated environment before making it live.
Your task is to script the process to deploy the app to an Azure App Service, using a staging deployment slot to validate updates before they go live. This involves creating all necessary resources in Azure, such as a resource group and an App Service plan. After verifying the new version of the app works as expected, swaps the staging slot into production. It should be optimized for cost efficiency.
ps
let "randomIdentifier=$RANDOM*$RANDOM"
location="East US"
resourceGroup="msdocs-app-service-rg-$randomIdentifier"
tag="deploy-deployment-slot.sh"
appServicePlan="msdocs-app-service-plan-$randomIdentifier"
webapp="msdocs-web-app-$randomIdentifier"
gitrepo=https://github.com/Azure-Samples/php-docs-hello-world
# Code here
Answer:
ps
let "randomIdentifier=$RANDOM*$RANDOM"
location="East US"
resourceGroup="msdocs-app-service-rg-$randomIdentifier"
tag="deploy-deployment-slot.sh"
appServicePlan="msdocs-app-service-plan-$randomIdentifier"
webapp="msdocs-web-app-$randomIdentifier"
gitrepo=https://github.com/Azure-Samples/php-docs-hello-world
# Create a resource group.
az group create --name $resourceGroup --location "$location" --tag $tag
# Create an App Service plan in STANDARD tier (minimum required by deployment slots).
echo "Creating $appServicePlan"
az appservice plan create --name $appServicePlan --resource-group $resourceGroup --location "$location"
--sku S1
# Create a web app
az webapp create --name $webapp --plan $appServicePlan --resource-group $resourceGroup
# Create a deployment slot with the name "staging".
az webapp deployment slot create --name $webapp --resource-group $resourceGroup --slot staging
# Deploy sample code to "staging" slot from GitHub.
az webapp deployment source config --name $webapp --resource-group $resourceGroup --slot staging --repo-url $gitrepo --branch master --manual-integration
# Swap the verified/warmed up staging slot into production.
az webapp deployment slot swap --name $webapp --resource-group $resourceGroup
    --slot staging

Note: If there was no deployment slots requirenments, 'az webapp deployment slot create' and 'az webapp deployment slot swap' (and '--slot staging' in 'az webapp deployment source config') could be dropped, and app service plan can go as low as FREE.`,
  },
  {
    q: `Question: You're an Azure developer working on a hobby project, deploying a PHP web app from a GitHub repo to Azure App Services. As part of your hands-on learning, you aim to automate the entire deployment process using a script.
Your mission is to script the deployment of the app to an Azure App Service. This process involves spinning up all the necessary resources in Azure, such as a resource group and an App Service plan. The goal is to have your application live and running on the Azure App Service at the end of the script execution, avoiding unnecessary costs.
ps
let "randomIdentifier=$RANDOM*$RANDOM"
location="East US"
resourceGroup="msdocs-app-service-rg-$randomIdentifier"
tag="deploy-github.sh"
gitrepo=https://github.com/Azure-Samples/php-docs-hello-world
appServicePlan="msdocs-app-service-plan-$randomIdentifier"
webapp="msdocs-web-app-$randomIdentifier"
# Code here

Answer:
ps
let "randomIdentifier=$RANDOM*$RANDOM"
location="East US"
resourceGroup="msdocs-app-service-rg-$randomIdentifier"
tag="deploy-github.sh"
gitrepo=https://github.com/Azure-Samples/php-docs-hello-world
appServicePlan="msdocs-app-service-plan-$randomIdentifier"
webapp="msdocs-web-app-$randomIdentifier"
# Create a resource group.
az group create --name $resourceGroup --location "$location" --tag $tag
# Create an App Service plan in 'FREE' tier.
az appservice plan create --name $appServicePlan --resource-group $resourceGroup --sku FREE
# Create a web app.
az webapp create --name $webapp --resource-group $resourceGroup --plan $appServicePlan
# Deploy code from a public GitHub repository.
az webapp deployment source config --name $webapp --resource-group $resourceGroup
    --repo-url $gitrepo --branch master --manual-integration

Note: If there is deployment slots requirenment, then 'az webapp deployment slot create' and 'az webapp deployment slot swap' (and '--slot staging' in 'az webapp deployment source config') should be added. Also the app service plan should be bumped to STANDARD.

`,
  },
  {
    q: `Question: You're building an ASP.NET Core Linux application utilizing Azure App Service Web App for Containers. You aim to deploy the application in a region in which your company's subscription does not currently have a resource group in there. What are the necessary Azure command-line interface (CLI) commands to deploy the application in that appropriate region?
ps
location="West Europe"
resourceGroup="WEurope"
appServicePlan="WEuropePlan"
appName="AspApp"
containerImage="mcr.microsoft.com/dotnet/samples:aspnetapp"
# Code here

Answer:
ps
location="West Europe"
resourceGroup="WEurope"
appServicePlan="WEuropePlan"
appName="AspApp"
containerImage="mcr.microsoft.com/dotnet/samples:aspnetapp"
# Create a new resource group in the West Europe region
az group create --name $resourceGroup --location "$location"
# Create an App Service plan in the West Europe region
az appservice plan create --name $appServicePlan --resource-group $resourceGroup --location "$location" --is-linux
# Create a web app in the new App Service Plan
az webapp create --name $appName --resource-group $resourceGroup --plan $appServicePlan --deployment-container-image-name $containerImage


`,
  },
  {
    q: `Question: Imagine you are tasked with setting up a WordPress application for your company's blog. The application should run in a Docker multi-container environment, with the configuration provided in the 'docker-compose-wordpress.yml' file. The WordPress application should connect to a new MySQL database, both to be hosted on Microsoft Azure. After the initial setup, you need to accommodate changes in your WordPress configuration, which will be done by modifying the Docker compose file and applying the changes. How would you handle this?
ps
location="West Europe"
resourceGroup="WEurope"
appServicePlan="WEuropePlan"
appName="WpApp"
wordpressDbServer="wp-database"
wordpressDb="wordpress"
wordpressAdmin="adminuser"
wordpressPassword="My5up3rStr0ngPaSw0rd!"
# Code here

Answer:
ps
location="West Europe"
resourceGroup="WEurope"
appServicePlan="WEuropePlan"
appName="WpApp"
wordpressDbServer="wp-database"
wordpressDb="wordpress"
wordpressAdmin="adminuser"
wordpressPassword="My5up3rStr0ngPaSw0rd!"
# Create a new resource group
az group create --name $resourceGroup --location "$location"
# Create a new App Service plan
az appservice plan create --name $appServicePlan --resource-group $resourceGroup --location "$location" --is-linux
# Create a new MySQL server
az mysql server create --resource-group $resourceGroup --name $wordpressDbServer --location "$location" --admin-user $wordpressAdmin --admin-password wordpressPassword
az mysql db create --resource-group $resourceGroup --server-name $wordpressDbServer --name $wordpressDb
# Create a web app
az webapp create --resource-group $resourceGroup --plan $appServicePlan --name $appName --multicontainer-config-type compose --multicontainer-config-file docker-compose-wordpress.yml
# Set environment variables
az webapp config appsettings set --resource-group $resourceGroup --name $appName --settings WORDPRESS_DB_HOST="$wordpressDbServer.mysql.database.azure.com" WORDPRESS_DB_USER="$wordpressAdmin" WORDPRESS_DB_PASSWORD="wordpressPassword" WORDPRESS_DB_NAME="$wordpressDb"
# Update app after editing docker-compose-wordpress.yml
az webapp config container set --resource-group $resourceGroup --name $appName --multicontainer-config-type compose --multicontainer-config-file docker-compose-wordpress.yml


`,
  },
  {
    q: `Question: Suppose you're responsible for migrating your company's online store application to a Kubernetes environment hosted on Azure (AKS). This application has a set of microservices, each defined in 'serviceA.yaml', 'serviceB.yaml', and 'serviceC.yaml' YAML files. You need to ensure the successful deployment and management of these microservices. Also, let's say you are required to monitor the performance and health of your application, for which you decide to integrate Azure Monitor for containers. How would you accomplish this task?
ps
# Variables
resourceGroup="MyResourceGroup"
AKSClusterName="MyAKSCluster"
location="West Europe"
monitorWorkspace="MyMonitorWorkspace"

Answer:
ps
# Variables
resourceGroup="MyResourceGroup"
AKSClusterName="MyAKSCluster"
location="West Europe"
monitorWorkspace="MyMonitorWorkspace"
# Create a new resource group in the specified location
az group create --name $resourceGroup --location "$location"
# Create a new AKS cluster in the resource group
az aks create --resource-group $resourceGroup --name $AKSClusterName --generate-ssh-keys
# Get the credentials for the AKS cluster
az aks get-credentials --resource-group $resourceGroup --name $AKSClusterName
# Deploy the microservices to the AKS cluster using their respective YAML files
kubectl apply -f serviceA.yaml
kubectl apply -f serviceB.yaml
kubectl apply -f serviceC.yaml
# Create Log Analytics workspace
az monitor log-analytics workspace create --resource-group $resourceGroup --workspace-name $monitorWorkspace --location $location
# Enable Azure Monitor for containers
az aks enable-addons --resource-group $resourceGroup --name $AKSClusterName --addons monitoring --workspace-resource-id $monitorWorkspace


`,
  },
  {
    q: `Question: Imagine you are tasked with deploying a web application on Azure App Service. As part of the task, you are also expected to set up Application Insights for monitoring the performance and usage data of the application, located in resource group '$resourceGroup' and app service plan '$appServicePlan' in location '$location'. All of these activities should be performed using the Azure CLI. How would you go about accomplishing this?
ps
appName="MyWebApp"
appInsightsName="MyAppInsights"

Answer:
ps
appName="MyWebApp"
appInsightsName="MyAppInsights"
# Create a web app
az webapp create --name $appName --resource-group $resourceGroup --plan $appServicePlan
# Create a new Application Insights resource in the resource group
az monitor app-insights component create --app $appInsightsName --location "$location" --resource-group $resourceGroup
# Enable Application Insights for the web app
az webapp config appsettings set --name $appName --resource-group $resourceGroup --settings APPINSIGHTS_INSTRUMENTATIONKEY="$(az monitor app-insights component show --app $appInsightsName --resource-group $resourceGroup --query instrumentationKey --output tsv)"

In the last command, we are using the Azure CLI to get the Instrumentation Key of the newly created Application Insights resource. The '--query' parameter allows us to specify the data to extract, and '--output tsv' is used to format the output as Tab-separated values, which gives us a clean output to use in setting the 'APPINSIGHTS_INSTRUMENTATIONKEY' setting.

`,
  },
  {
    q: `Question: As an Azure Cloud Engineer, your company needs you to streamline the deployment process of their web applications. To help achieve this, they've asked you to automate the process using a bash script.
Here's your mission: the script needs to set up an environment in Azure that pulls a Docker container named 'companywebapp:latest' from your company's private registry and deploys it to an Azure App Service in the East US region.
The resources that need to be created include a resource group (tagged with 'deploy-linux-docker-app-only.sh'), an app service plan, and a web app. Can you write a script that fulfills these requirements?
ps
let "randomIdentifier=$RANDOM*$RANDOM"
resourceGroup="msdocs-app-service-rg-$randomIdentifier"
appServicePlan="msdocs-app-service-plan-$randomIdentifier"
webapp="msdocs-web-app-$randomIdentifier"
registryUrl="https://yourCompanyRegistry.azurecr.io"
# Code here

Answer:
ps
let "randomIdentifier=$RANDOM*$RANDOM"
resourceGroup="msdocs-app-service-rg-$randomIdentifier"
appServicePlan="msdocs-app-service-plan-$randomIdentifier"
webapp="msdocs-web-app-$randomIdentifier"
registryUrl="https://yourCompanyRegistry.azurecr.io"
location="East US"
tag="deploy-linux-docker-app-only.sh"
dockerHubContainerPath="simplewebapp:latest"
# Create a resource group.
az group create --name $resourceGroup --location "$location" --tag $tag
# Create an App Service plan
az appservice plan create --name $appServicePlan --resource-group $resourceGroup
# Create a web app.
az webapp create --name $webapp --resource-group $resourceGroup --plan $appServicePlan  --runtime "NODE|14-lts"
# Configure the web app to use the Docker container image from your company's custom registry
az webapp config container set --name $webapp --resource-group $resourceGroup --docker-custom-image-name $dockerHubContainerPath --docker-registry-server-url $registryUrl

Note: '--docker-registry-server-url' is not needed if the image is on DockerHub

`,
  },
  {
    q: `Question: How to access client certificate for Asp.Net app?
`,
    a: `- [x] 'HttpRequest.ClientCertificate' property
- [ ] Through the HTTPS request header
- [ ] Through a URL query string
- [ ] Through the client cookie`,
    n: `Answer:For ASP.NET, the client certificate is available through the 'HttpRequest.ClientCertificate' property.  
For other application stacks (Node.js, PHP, etc.), the client cert is available in your app through a base64 encoded value in the 'X-ARR-ClientCert' request header.

`,
  },
  {
    q: `Question: How to access client certificate for Node.js app?
`,
    a: `- [ ] 'HttpRequest.ClientCertificate' property
- [x] Through the HTTPS request header
- [ ] Through a URL query string
- [ ] Through the client cookie`,
    n: `Answer:For Node.js, the client cert is available in your app through a base64 encoded value in the 'X-ARR-ClientCert' request header.
For ASP.NET, the client certificate is available through the 'HttpRequest.ClientCertificate' property.

`,
  },
  {
    q: `Question: How to enable client certificates through interface?`,
    n: `Answer:'Configuration > General Settings'. Set 'Client certificate mode' to **Require**

`,
  },
  {
    q: `Question: How to require client certificates for a webapp?
ps
# Code here

Answer:
ps
az webapp update --set clientCertEnabled=true --name <app-name> --resource-group <group-name>


`,
  },
  {
    q: `Question: As an Azure Cloud Engineer, you received a complaint from a client who is running tests on your web application from 'http://localhost:5000'. They reported an error stating: 'Access to XMLHttpRequest at 'http://myWebApp.azurewebsites.net' from origin 'http://localhost:5000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.' Fix that!
The web application resides in a resource group named 'MyResourceGroup'.
ps
# Code here

Answer:
ps
az webapp cors add --resource-group myResourceGroup --name myWebApp --allowed-origins 'http://localhost:5000'


`,
  },
  {
    q: `Question: As an Azure Cloud Engineer, you received an email from a client who's trying to access data in one of your Blob Storage accounts from their local machine at 'http://localhost:5000'. They've been encountering an error message that says: 'Access to XMLHttpRequest at 'https://myStorageAccount.blob.core.windows.net' from origin 'http://localhost:5000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.'. Fix that!
ps
# Code here

Answer:
ps
az storage cors add --services blob --methods GET POST --origins 'http://localhost:5000' --allowed-headers '*' --exposed-headers '*' --max-age 200 --account-name myStorageAccount


`,
  },
  {
    q: `Question: Several users have reported receiving HTTP 500 errors when attempting to connect to the web app you have developed using Azure App Service. To allow developers to see the connection error details in real-time, what action is required on your part?
`,
    a: `- [x] Enable the Web Server Logging feature.
- [ ] Create a security playbook.
- [ ] Enable the Application Logging feature.
- [ ] Create resource health alerts.`,
    n: `Answer:You must enable Web Server Logging in Azure App Service when handling raw HTTP requests data. The logs contain details like HTTP method, resource URI, client IP and port, user agent, response code, etc. You can save these logs in storage or a file system, and specify the number of days for retaining them.

`,
  },
  {
    q: `Question: Which of the following types of application logging is supported on the Linux platform?
`,
    a: `- [ ] Web server logging
- [ ] Failed request tracing
- [ ] Detailed Error Messages
- [x] Deployment logging
- [x] Application logging`,
    n: `Answer:Deployment and Application logging are supported on the Linux platform.

`,
  },
  {
    q: `Question: Which of the following types of application logging supporteds blob storage?
`,
    a: `- [x] Web server logging
- [ ] Failed request tracing
- [ ] Detailed Error Messages
- [ ] Deployment logging
- [x] Application logging`,
    n: `Answer:Web server and Application logging are support blob storage.

`,
  },
  {
    q: `Question: Which of the following statements are true for application logging?
`,
    a: `- [ ] You can choose App Service file system or Blob storage logging, but not both
- [x] Only .NET application logs can be written to the blob storage
- [x] You can use other Azure services for logging and monitoring
- [x] App Service file system (Filesystem) will turn itself off in 12 hours
- [ ] Blob storage logging will turn itself off in 12 hours
- [x] Blob storage is for long-term logging
- [ ] App Service file system logging is more detailed than Blob storage logging
- [x] Logs can be reatained for specified amount of days
- [x] For logs stored in the App Service file system, you can download the ZIP file in the browser
- [ ] Filesystem and storage Blob storage are supported for both Windows and Linux apps.
Answer:
- App Service file system logging is temporary logging, Blob storage logging is for long term
- Blob storage is only applicable for Web server and Application logging
- Blob storage logging is more detailed than App Service file system
- Filesystem storage is the only available option for Linux. Windows supports both filesystem and blob storage
- ZIP file of logs is stored at:
  - For Linux/custom containers:'https://<app-name>.scm.azurewebsites.net/api/logs/docker/zip'
  - For Windows apps:'https://<app-name>.scm.azurewebsites.net/api/dump'

`,
  },
  {
    q: `Question: Imagine you are a developer who needs to set up monitoring for a .NET web application named 'myApp' deployed on Microsoft Azure. Your task is to leverage Azure Monitor by creating a Log Analytics workspace within an existing resource group named 'MyResourceGroup'. After creating the workspace, you need to retrieve the resource ID of the web application and the workspace ID of the newly created Log Analytics workspace. With these IDs, you are then tasked with creating diagnostic settings for the web application to enable Azure Monitor to collect console logs and HTTP logs. How would you perform these tasks using Azure CLI commands?
ps
# Code here

Answer:
ps
# Create a Log Analytics workspace within the existing resource group named 'myResourceGroup'
az monitor log-analytics workspace create --resource-group myResourceGroup --workspace-name myMonitorWorkspace
# Retrieve the resource ID of the web application named 'myApp'
resourceID=$(az webapp show -g myResourceGroup -n myApp --query id --output tsv)
# Retrieve the workspace ID of the newly created Log Analytics workspace
workspaceID=$(az monitor log-analytics workspace show -g myResourceGroup --workspace-name myMonitorWorkspace --query id --output tsv)
# Create diagnostic settings for the web application to enable Azure Monitor to collect console logs and HTTP logs
az monitor diagnostic-settings create --resource $resourceID \
 --workspace $workspaceID \
 -n myMonitorLogs \
 --logs '[{"category": "AppServiceConsoleLogs", "enabled": true},
  {"category": "AppServiceHTTPLogs", "enabled": true}]'


`,
  },
  {
    q: `Question: How to stream HTTP logs for 'myApp' in 'MyResourceGroup' resource group, using Cloud Shell?
ps
# Code here

Answer:
To filter specific log types, such as HTTP, use the '--provider' parameter
ps
az webapp log tail --name myApp --resource-group myResourceGroup --provider http


`,
  },
  {
    q: `Question: How to stream errors from 'myApp' in 'MyResourceGroup' resource group, using Cloud Shell?
ps
# Code here

Answer:
To filter logs by errror, such as HTTP, use the '--filter Error' parameter
ps
az webapp log tail --name myApp --resource-group myResourceGroup --filter Error


`,
  },
  {
    q: `Question: You are managing an Azure Subscription named 'SubscriptionA', where an Azure App Service named 'myAppService' is deployed and running on a Linux environment. The monitoring team requires access to query logs generated by 'myAppService'. How should you configure the system to meet this requirement?
`,
    a: `- [ ] Enable 'AppServiceAppLogs' under Diagnostics settings and set the destination to send logs to the App Service file system.
- [ ] Enable 'AppServiceAppLogs' under Diagnostics settings and set the destination to send logs to a Blob Storage Account.
- [x] Enable 'AppServiceAppLogs' under Diagnostics settings and set the destination to send logs to Log Analytics.
- [ ] Enable 'AppServiceConsoleLogs' under Diagnostics settings and set the destination to send logs to Log Analytics.
- [ ] Enable 'AppServiceConsoleLogs' under Diagnostics settings and set the destination to send logs to a Blob Storage Account.
- [ ] Enable 'AppServiceConsoleLogs' under Diagnostics settings and set the destination to send logs to Log Analytics.
- [ ] Enable 'AllMetrics' under Diagnostics settings and set the destination to send logs to Log Analytics.
- [ ] Enable 'AllMetrics' under Diagnostics settings and set the destination to send logs to a Blob Storage Account.
- [ ] Enable 'AllMetrics' under Diagnostics settings and set the destination to send logs to Log Analytics.`,
    n: `Answer:Enable 'AppServiceAppLogs' sent to 'Log Analytics'.
The 'Azure Log Analytics' service provides a platform for comprehensive log management and analytics. By enabling 'AppServiceAppLogs' under 'Diagnostics' settings and setting the destination to send logs to 'Log Analytics', you allow the monitoring team to query and analyze these logs. The other 'AppServiceAppLogs' options, while valid Azure services, do not provide the same level of log querying and analysis capabilities as 'Log Analytics'.  
'AppServiceConsoleLogs' is incorrect because it is not the appropriate setting for this requirement.  
'AllMetrics' settings are collected by agents on to the App Service and report the usage of host resources. These are items like CPU usage, memory usage, and disk I/O used.

`,
  },
  {
    q: `Question: Which of the following App Service plan categories provides the maximum scale-out capabilities?
`,
    a: `- [ ] Dedicated compute
- [x] Isolated
- [ ] Shared compute`,
    n: `Answer:The Isolated category provides network and compute isolation, and has the maximum scale-out capability.

`,
  },
  {
    q: `Question: Which of these statements best describes autoscaling?
`,
    a: `- [ ] Autoscaling requires an administrator to actively monitor the workload on a system.
- [x] Autoscaling is a scale out/scale in solution.
- [ ] Scaling up/scale down provides better availability than autoscaling.`,
    n: `Answer:The system can scale out when specified resource metrics indicate increasing usage, and scale in when these metrics drop.

`,
  },
  {
    q: `Question: Which of these scenarios is a suitable candidate for autoscaling?
`,
    a: `- [x] The number of users requiring access to an application varies according to a regular schedule. For example, more users use the system on a Friday than other days of the week.
- [ ] The system is subject to a sudden influx of requests that grinds your system to a halt.
- [ ] Your organization is running a promotion and expects to see increased traffic to their web site for the next couple of weeks.`,
    n: `Answer:Changes in application load that are predictable are good candidates for autoscaling.  
Organization running a promotion: Manual scaling is a better option here since this is a one-off event with a known duration.  
Sudden influx of requests: The increasing burst of activity could be caused by a Denial of Service attack that is attempting to overwhelm your system. Autoscaling wouldn't solve the problem.

`,
  },
  {
    q: `Question: Create an App Service web app 'MyAppService' and its prerequisites. The service will be located in West US and must scale if usage is increased. Should be outimized for cost.
ps
# Code here
`,
    n: `Answer:'Standard', 'Premium', 'PremiumV2', and 'PremiumV3' all support autoscale, but 'Standard' is most cost effective in this scenario.
ps
az group create --name MyResourceGroup --location "West US"
az appservice plan create --name MyAppServicePlan --resource-group MyResourceGroup --sku S1
az webapp create --name MyAppService --resource-group MyResourceGroup --plan MyAppServicePlan


`,
  },
  {
    q: `Question: Create an App Service web app 'MyAppService' and its prerequisites. The service will be located in West US and would scale occasionally when some promotion is running. Should be outimized for cost.
ps
# Code here
`,
    n: `Answer:All plans support manual scaling, but 'Basic' is most cost effective in this scenario.
ps
az group create --name MyResourceGroup --location "West US"
az appservice plan create --name MyAppServicePlan --resource-group MyResourceGroup --sku B1
az webapp create --name MyAppService --resource-group MyResourceGroup --plan MyAppServicePlan


`,
  },
  {
    q: `Question: Which of the following properties of an App Service plan can be set via Azure CLI:
- [x] Set minimum number of web app instances
- [ ] Set maximum number of web app instances
- [x] Number of preWarmed instances.`,
    n: `Answer:[You can't change the maximum scale limit in Azure CLI](https://learn.microsoft.com/en-us/azure/app-service/manage-automatic-scaling?tabs=azure-cli#set-maximum-number-of-web-app-instances), you must instead use the Azure portal.
ps
az webapp update --minimum-elastic-instance-count X --prewarmed-instance-count Y


`,
  },
  {
    q: `Question: Your company has developed a web application that experiences intermittent high traffic volumes. However, the company has noticed that during the sudden traffic spikes, the performance of their application temporarily degrades before it starts to stabilize. The degradation is especially apparent when the application hasn't received any significant traffic for a while. How can you mitigate this performance degradation issue?
`,
    a: `- [ ] Manually adjust the number of instances when traffic increases.
- [ ] Set up custom scaling rules based on traffic using Azure Autoscale.
- [x] Implement Azure Automatic Scaling with prewarming of instances.
- [ ] Monitor performance using Azure Application Insights Live Metrics.
Bonus question: You are running on a 'Standard' plan, do you need to change it in order to implement your solution?`,
    n: `Answer:The problem your company experiences is called _cold boot_. In order to mitigate it, you need Automatic Scaling with pre-warmed/always ready instances. This requires at least 'PremiumV2' plan.  
Azure Manual Scaling lacks real-time adjustment capabilities, making it inefficient for sudden traffic spikes.  
Although Azure Autoscale scales based on traffic, it can still experience "cold starts" during sudden traffic spikes.  
Azure Application Insights Live Metrics: This is a monitoring tool, not a scaling solution.

`,
  },
  {
    q: `Question: Which of the following App Service plans supports pre-warmed instances:
- [ ] Free
- [ ] Shared
- [ ] Basic
- [ ] Standard
- [x] Premium
- [ ] Isolated`,
    n: `Answer:Pre-warmed instances is a feature of Automatic scaling, which is supported only on 'PremiumV2' and 'PremiumV3' plans.

`,
  },
  {
    q: `Question: Which of the following App Service plans you can have always ready instances?
`,
    a: `- [ ] Free
- [ ] Shared
- [ ] Basic
- [ ] Standard
- [ ] Premium
- [x] PremiumV2
- [ ] Isolated
Answer:
- 'PremiumV2' and 'PremiumV3': yes (default 1)
- 'Standard' and 'Premium': No, your web app runs on other instances available during the scale out operation, based on threshold defined for autoscale rules.
- 'Basic': No, your web app runs on the number of manually scaled instances.

`,
  },
  {
    q: `Question: Which of the following App Service plans supports schedule based scaling:
- [ ] Free
- [ ] Shared
- [ ] Basic
- [x] Standard
- [x] Premium
- [ ] Isolated`,
    n: `Answer:Only 'Standard' to 'Premium' support schedule based scaling.

`,
  },
  {
    q: `Question: Which of the following App Service plans does not supports scaling out:
- [x] Free
- [x] Shared
- [ ] Basic
- [ ] Standard
- [ ] Premium
- [ ] Isolated`,
    n: `Answer:'Free' and 'Shared' tiers run apps on a common Azure VM, shared with other users' apps.

`,
  },
  {
    q: `Question: How apps are charged in Shared App Service plan:
- [x] Each app is charged for CPU quota
- [ ] Each VM instance in the App Service plan is charged
- [ ] The number of isolated workers that run your apps`,
    n: `Answer:CPU quota

`,
  },
  {
    q: `Question: How apps are charged in Dedicated compute App Service plan:
- [ ] Each app is charged for CPU quota
- [x] Each VM instance in the App Service plan is charged
- [ ] The number of isolated workers that run your apps`,
    n: `Answer:VM instances

`,
  },
  {
    q: `Question: How apps are charged in Isolated App Service plan:
- [ ] Each app is charged for CPU quota
- [ ] Each VM instance in the App Service plan is charged
- [x] The number of isolated workers that run your apps`,
    n: `Answer:The number of isolated workers that run your apps

`,
  },
  {
    q: `Question: You want to move to another App Service plan. Which of following statements are true:
- [x] You can always move from lower-tiered plan to a higher-tiered plan
- [ ] You can always move from higher-tiered plan to a lower-tiered plan
- [x] You can move from higher-tiered plan to a lower-tiered plan only in certain scenarios
- [x] You can move an app to another App Service plan only in the same resouce group
- [ ] You can move an app to another App Service plan in any resouce group
- [x] You can move an app to another App Service plan only in the same geographical region
- [ ] You can move an app to another App Service plan in any geographical region
- [x] You can move an app to another App Service plan only of the same OS type
- [ ] You can move an app to another App Service plan of any OS type`,
    n: `Answer:You can move an app to another App Service plan, as long as the source plan and the target plan are in the same resource group, geographical region, and of the same OS type, and supports the currently used features.

`,
  },
  {
    q: `Question: Which App Service plans support custom DNS name:
- [ ] Free
- [x] Shared
- [x] Basic
- [x] Standard
- [x] Premium
- [x] Isolated`,
    n: `Answer:You cannot have custom DNS name on the 'Free' tier.

`,
  },
  {
    q: `Question: You want a Linux App Service web app on an App Service plan that supports custom DNS name. Which App Service plans satisfy these requirenments?
`,
    a: `- [ ] Free
- [ ] Shared
- [x] Basic
- [x] Standard
- [x] Premium
- [x] Isolated`,
    n: `Answer:Although 'Shared' supports custom DNS name, it does not support Linux. Lowest is 'Basic'.

`,
  },
  {
    q: `Question: Which App Service plans support custom TLS bindings:
- [ ] Free
- [ ] Shared
- [x] Basic
- [x] Standard
- [x] Premium
- [x] Isolated`,
    n: `Answer:You cannot have custom TLS bindings on the 'Free' and 'Shared' tiers.

`,
  },
  {
    q: `Question: Which App Service plans support Always On:
- [ ] Free
- [ ] Shared
- [x] Basic
- [x] Standard
- [x] Premium
- [x] Isolated`,
    n: `Answer:You cannot have Always On on the 'Free' and 'Shared' tiers.

`,
  },
  {
    q: `Question: A corporation has an Azure-based web application that triggers an email alert during specific events. Users have noticed that alerts for irregular activities are sometimes delayed by several minutes. What should be done to address this delay?
`,
    a: `- [ ] Configure the Azure Function to operate on an App Service plan.
- [ ] Disable the Always On feature.
- [ ] Switch the Azure Function to a consumption-based plan.
- [x] Enable the Always On feature.`,
    n: `Answer:The problem arises because the Azure Web App goes into an idle state when not in use, causing delays in sending anomaly detection emails. To prevent this, the Always On feature should be enabled. This ensures that the Web App is always running, thereby eliminating the delay.

`,
  },
  {
    q: `Question: Which App Service plans support staging environments (deployment slots):
- [ ] Free
- [ ] Shared
- [ ] Basic
- [x] Standard
- [x] Premium
- [x] Isolated`,
    n: `Answer:You cannot have staging environments on the 'Free', 'Shared', and 'Basic' tiers.

`,
  },
  {
    q: `Question: You have existing App Service web app 'MyAppService' in West US running on 'Basic' plan. You want to add support for staging environments and move it to North Central US region region. What steps you need to take?
ps
# Code here
`,
    n: `Answer:You cannot move web app from one region to other. Also 'Basic' plan does not support staging environments. The app needs to be cloned into a new region.
ps
# Create new resource group with location 'North Central US'
New-AzResourceGroup -Name DestinationAzureResourceGroup -Location "North Central US"
# Create new 'Standard' App Service plan for that group (and set staging environments leter)
New-AzAppServicePlan -Location "North Central US" -ResourceGroupName DestinationAzureResourceGroup -Name DestinationAppServicePlan -Tier Standard
# Clone 'MyAppService' into new web app and place it in the new App Service plan
$srcapp = Get-AzWebApp -ResourceGroupName SourceAzureResourceGroup -Name MyAppService
$destapp = New-AzWebApp -ResourceGroupName DestinationAzureResourceGroup -Name MyAppService2 -Location "North Central US" -AppServicePlan DestinationAppServicePlan -SourceWebApp $srcapp


`,
  },
  {
    q: `Question: Where the setting for cloning existing App Service web app is located?
`,
    a: `- [ ] Application settings
- [x] Development Tools
- [ ] General settings`,
    n: `Answer:General Settings is used to configure stack, platform, debugging, and incoming client certificate settings.

`,
  },
  {
    q: `Question: You have 'MyAppServicePlan' App Service plan that have no apps associated with it. Which of the following statements is true:
- [x] MyAppServicePlan still incurs charges even if unused
- [ ] MyAppServicePlan will not incur any charges if it is not used`,
    n: `Answer:App Service plans that have no apps associated with them still incur charges because they continue to reserve the configured VM instances.

`,
  },
  {
    q: `Question: You want an App Service web app which runs on dedicated Azure Virtual Networks. Which App Service plans satisfies this requirenment?
`,
    a: `- [ ] Free
- [ ] Shared
- [ ] Basic
- [ ] Standard
- [ ] Premium
- [x] Isolated`,
    n: `Answer:The 'Isolated' and 'IsolatedV2' tiers run dedicated Azure VMs on dedicated Azure Virtual Networks.

`,
  },
  {
    q: `Question: When should you isolate your app into a new App Service plan?
Answer:
- The app is resource-intensive.
- You want to scale the app independently from the other apps in the existing plan.
- The app needs resource in a different geographical region.

`,
  },
  {
    q: `Question: Which of the following statements are true:
- [ ] You can independently scale apps placed in the same App Service plan
- [x] An app runs on all the VM instances configured in the App Service plan.
- [x] If multiple apps are in the same App Service plan, they all share the same VM instances.
- [x] All deployment slots also run on the same VM instances as the app in given App Service plan
- [ ] Diagnostic logs, backups, and WebJobs don't use CPU cycles and memory from VM instances on an App Service plan
- [x] You can improve app's performance if you put it in a new, empty App Service plan`,
    n: `Answer:App Service is set of VMs that run one or group of applications and their services together in the same VM. Scaling out simply adds another VM with the same applications and services.

`,
  },
  {
    q: `Question: What App Service plan the following command will create:
powershell
az appservice plan create --name $planName --resource-group $resourceGroupName --location $location

- [ ] Free
- [ ] Shared
- [x] Basic
- [ ] Standard
- [ ] Premium
- [ ] Isolated`,
    n: `Answer:Default SKU is 'B1' (Basic)

`,
  },
  {
    q: `Question: Which Azure Monitor log types are only supported on 'Premium' (and above) plan?
`,
    a: `- [ ] AppServiceConsoleLogs
- [ ] AppServiceHTTPLogs
- [ ] AppServiceEnvironmentPlatformLogs
- [ ] AppServiceAuditLogs
- [x] AppServiceFileAuditLogs
- [ ] AppServiceAppLogs
- [ ] AppServiceIPSecAuditLogs
- [ ] AppServicePlatformLogs
- [x] AppServiceAntivirusScanAuditLogs`,
    n: `Answer:Anti-virus scan logs using Microsoft Defender and File changes made to the site content

`,
  },
  {
    q: `Question: When you execute the following command 'az webapp create --name MyWebApp --plan D1 --resource-group MyResourceGroup' you notice that page load times are longer during peak traffic hours. You aim to automate scaling when the CPU load surpasses 80 percent, ensuring minimal costs. Which az cli command should you execute first?
`,
    a: `- [ ] 'az monitor autoscale create --resource MyWebApp --condition "Percentage CPU > 80 avg 5m'
- [ ] 'az appservice plan update --name <YourPlanName> --resource-group MyResourceGroup --sku P1v2'
- [x] 'az appservice plan update --name <YourPlanName> --resource-group MyResourceGroup --sku S1'
- [ ] None of the listed. You need to switch to Consumption plan first.`,
    n: `Answer:The app is on Shared plan, Standard is the minimum for autoscale ('--sku S1').

`,
  },
  {
    q: `Question: When you set 'WEBSITE_OVERRIDE_PRESERVE_DEFAULT_STICKY_SLOT_SETTINGS=false' for an app in Azure App Service, what happens to managed identities during the swap process?
`,
    a: `- [ ] They are always swapped, regardless of this setting
- [ ] They are not swapped, because this setting needs to be true
- [ ] They are swapped because the setting is set to false
- [x] They are never swapped
- [ ] They are swapped only in the production slot`,
    n: `Answer:They are never swapped, regardless of the setting

`,
  },
  {
    q: `Question: Where will this link '<webappname>.azurewebsites.net/?x-ms-routing-name=self' will take you if you set routing rules to '10%'?
`,
    a: `- [ ] Same deployment slot
- [ ] To 'self' deployment slot
- [ ] To staging deployment slot
- [x] To production deployment slot
- [ ] Unable to determine, because default routing rules will switch you to random deployment slot`,
    n: `Answer:'?x-ms-routing-name=self' will send you to production deployment slot regardless of the routing rules.

`,
  },
  {
    q: `Question: Where will this link '<webappname>.azurewebsites.net/' will take you if you haven't set any routing rules?
`,
    a: `- [ ] To staging deployment slot
- [x] To production deployment slot
- [ ] Unable to determine, because default routing rules will switch you to random deployment slot`,
    n: `Answer:Default routing rules give 0% chance for random slot, and by default you are directed to production slot.

`,
  },
  {
    q: `Question: You set connection string via 'az webapp config connection-string set --connection-string-type SQLServer --settings MyDb="Server=myserver;Database=mydb;User Id=myuser;Password=mypassword;"'. Which are the valid ways to obtain it?
`,
    a: `
- [x] 'Configuration.GetConnectionString("MyDb")'
- [x] 'Configuration.GetConnectionString("SQLCONNSTR_MyDb")'
- [ ] 'Configuration.GetConnectionString("SQLServer")'
- [ ] 'Configuration.GetConnectionString("SQLCONNSTR_SQLServer")'
- [x] 'Environment.GetEnvironmentVariable("SQLCONNSTR_MyDb")'
- [ ] 'Environment.GetEnvironmentVariable("MyDb")'
- [ ] 'Environment.GetEnvironmentVariable("SQLServer")'
- [ ] 'Environment.GetEnvironmentVariable("SQLCONNSTR_SQLServer")`,
    n: `Answer:GetEnvironmentVariable has to use '<connection_type>CONNSTR_<name>', GetConnectionString can use it as well, or just '<name>'

`,
  },
  {
    q: `Question: What is the effect on the '/home/LogFiles' directory when enabling application logging with the File System option?
`,
    a: `- [ ] It will persist only if 'WEBSITES_ENABLE_APP_SERVICE_STORAGE=true'.
- [ ] It will not persist across app restarts.
- [x] It will always persist upon app restarts, regardless of the persistent storage setting.
- [ ] It will be overwritten by existing files on persistent storage.`,
    n: `Answer:The '/home/LogFiles' directory always persists upon app restarts if application logging is enabled with the File System option, independently of the persistent storage being enabled or disabled.

`,
  },
  {
    q: `Question: What action is required if you initiate a storage failover when the storage account is mounted to the app?
`,
    a: `- [x] The app must be restarted or the storage must be remounted.
- [ ] 'WEBSITES_ENABLE_APP_SERVICE_STORAGE' must be set to 'false'.
- [ ] No action is required. The app will automatically reconnect to the storage mount.`,
    n: `Answer:Storage failover requires app restart or remounting of Azure Storage.

`,
  },
  {
    q: `Question: You want to mount an Azure Storage as a local share in App Service in a Linux container. Which of the following statements are true:
- [ ] Azure Files are mounted in read only mode.
- [x] Azure Files are mounted in read and write mode.
- [x] Azure blobs are mounted in read only mode.
- [ ] Azure blobs are mounted in read and write mode.
- [x] The app may only have 5 mount points.
- [ ] The app may only have 1 mount point.
- [ ] The app may have unlimeted mount points.
- [x] Storage mount changes will restart the app.
- [ ] Storage mount changes will not restart the app.`,
    n: `Answer:Azure Files are read/write, Azure blobs are read only. Up to 5 mount points per app. Restart on chaning storage mount.

`,
  },
  {
    q: `Question: Finnish this command to enable automatic scaling with max burst of 5:
ps
  az appservice plan update --name $appServicePlanName --resource-group $resourceGroup # Code here

Answer:
ps
  az appservice plan update --name $appServicePlanName --resource-group $resourceGroup --elastic-scale true --max-elastic-worker-count 5


`,
  },
  {
    q: `Question: When does scale out occur?
`,
    a: `- [ ] When all of the conditions are met
- [x] When at least one of the conditions is met
- [ ] Only scale in can occur`,
    n: `Answer:When any of the conditions is met

`,
  },
  {
    q: `Question: Which of the following certificates can be exported?
`,
    a: `- [ ] Free Managed Certificate
- [x] App Service Certificate
- [x] Certificates stored in Key Vault`,
    n: `Answer:Free Managed certificated - No wildcard certificates or private DNS, can't be exported.

`,
  },
  {
    q: `Question: You have multiple web apps in Standard plan. Which of the following statements is true?
`,
    a: `- [ ] All apps in theat plan use shared workers
- [ ] Each app has its own worker
- [x] All apps in that plan run on the same worker`,
    n: `Answer:If you have a Standard App Service plan, all the apps in that plan run on the same worker.

`,
  },
  {
    q: `Question: What are outbound addresses in the context of Azure App Service Web Apps?
`,
    a: `- [ ] IP addresses used to identify inbound traffic to the application.
- [x] IP addresses used by the application to make calls to external services.
- [ ] A set of firewall rules to control inbound and outbound traffic.
- [ ] A set of IP addresses that application can make calls to
- [ ] A feature to map custom domain names to IP addresses.`,
    n: `Answer:Outbound addresses in Azure App Service Web Apps are the IP addresses used by the application to make calls to external services. They are shared among all applications running on the same type of worker VM.

`,
  },
  {
    q: `Question: For logs stored in the App Service file system of Windows apps, the easiest way is to download the ZIP file in the browser at:
- [ ]'https://<app-name>.scm.azurewebsites.net/api/logs/docker/zip'
- [x]'https://<app-name>.scm.azurewebsites.net/api/dump'
- [ ]'https://<app-name>.scm.azurewebsites.net/api/logs'
- [ ]'https://<app-name>.scm.azurewebsites.net/logs'
- [ ]'https://<app-name>.scm.azurewebsites.net/api/home/LogFiles'
- [ ]'https://<app-name>.scm.azurewebsites.net/home/LogFiles`,
    n: `Answer:For Windows is in '/api/dump', for Linux is '/api/logs/docker/zip'

`,
  },
  {
    q: `Question: In Azure App Service, the metrics such as CPU Percentage, Memory Percentage, Data In, and Data Out are used to monitor:
- [ ] A single app within the plan.
- [x] All instances of the plan, not a single app.
- [ ] Individual virtual machines within the app service plan.
- [ ] The performance of the underlying infrastructure supporting the app service plan.`,
    n: `Answer:These metrics are used across all instances of the plan, not for monitoring a single app within the plan.

`,
  },
  {
    q: `Question: In Azure App Service running on Basic plan, the Health Check feature pings a specified path every minute. What actions are taken if an instance fails to respond with a valid status code?
`,
    a: `- [ ] It's marked unhealthy and immediately replaced.
- [x] It's marked unhealthy and removed from the load balancer, and if it stays unhealthy for an hour, it's replaced.
- [ ] It's marked unhealthy, and has to be manually fixed.
- [ ] It's marked unhealthy, and the x-ms-auth-internal-token request header is checked against the WEBSITE_AUTH_ENCRYPTION_KEY environment variable to confirm status.`,
    n: `Answer:An instance is marked unhealthy and removed from the load balancer if it fails to respond with a valid status code after 10 requests. If it stays unhealthy for an hour, it's replaced (only for Basic+).

`,
  },
  {
    q: `Question: In Azure App Service Health Checks, when using your own authentication system, how can you authenticate the health check request and ensure that it is originating from the App?
`,
    a: `- [ ] By allowing anonymous access to the Health check path and validating that the 'x-ms-auth-internal-token' request header matches the SHA256 hash of the 'WEBSITE_AUTH_ENCRYPTION_KEY' environment variable.
- [ ] By allowing anonymous access to the Health check path and validating that the 'x-ms-auth-internal-token' request header matches the 'WEBSITE_AUTH_ENCRYPTION_KEY' environment variable.
- [x] By restricting application access through IP restrictions and validating that the 'x-ms-auth-internal-token' request header matches the SHA256 hash of the 'WEBSITE_AUTH_ENCRYPTION_KEY' environment variable.
- [ ] By restricting application access through IP restrictions and validating that the 'x-ms-auth-internal-token' request header matches the 'WEBSITE_AUTH_ENCRYPTION_KEY' environment variable.
- [ ] By encrypting the 'WEBSITE_AUTH_ENCRYPTION_KEY' environment variable with a client certificate.
- [ ] By restricting application access through IP restrictions.
- [ ] By allowing anonymous access to the Health check path
- [ ] By using a Virtual Network to restrict application access and validating that the 'x-ms-auth-internal-token' request header is present.`,
    n: `Answer:For private endpoints check if 'x-ms-auth-internal-token' request header equals the hashed value of 'WEBSITE_AUTH_ENCRYPTION_KEY' environment variable. You should first use features such as IP restrictions, client certificates, or a Virtual Network to restrict application access.

`,
  },
  {
    q: `Question: When mounting Azure Storage as a local share in Azure App Service, what is something you should NOT do?
`,
    a: `- [ ] Place app and storage in the same Azure region.
- [x] Use Azure Storage for local databases or apps relying on file handles and locks.
- [ ] Use Azure Files for read/write operations in Linux containers.
- [ ] Use Azure Files for read/write operations in Windows apps.
- [x] Use Azure Storage for read/write operations in Linux containers.
- [ ] Use Azure Storage for read/write operations in Windows apps.
- [x] Regenerate your access key often.`,
    n: `Answer:Avoid using Azure Storage for local databases or apps dependent on file handles and locks, refrain from using it for read/write actions in Linux containers, and minimize frequent regeneration of your access key.

`,
  },
  {
    q: `Question: Which of the following scenarios is best suited for using a Free Managed Certificate in Azure App Service?
`,
    a: `- [ ] Securing a custom domain with wildcard certificates
- [ ] Storing in Azure App Service Environment (ASE)
- [x] Securing a public website with auto-renewal every 6 months
- [ ] Exporting the certificate for use in another environment`,
    n: `Answer:Free Managed Certificates are auto-renewed but don't support wildcard certificates, can't be exported, and are not supported in ASE.

`,
  },
  {
    q: `Question: Which of the following is NOT a feature of the App Service Certificate in Azure?
`,
    a: `- [ ] Automated certificate management
- [ ] Renewal and export options
- [x] Requires a password-protected PFX file
- [ ] Managed by Azure as a private certificate`,
    n: `Answer:This requirement is related to uploading a private certificate, not the App Service Certificate.

`,
  },
  {
    q: `Question: When uploading a private certificate to Azure App Service, what is a mandatory requirement?
`,
    a: `- [ ] Can be used for accessing remote resources
- [ ] Supports private DNS in Free Managed Certificate
- [x] Requires a password-protected PFX file encrypted with triple DES
- [ ] Auto-renewed every 6 months`,
    n: `Answer:This is a specific requirement for uploading a private certificate.

`,
  },
  {
    q: `Question: You want to secure a public domain in Azure App Service without needing wildcard certificates or private DNS, and you want the certificate to be auto-renewed. Which option should you choose?
`,
    a: `- [x] Free Managed Certificate
- [ ] App Service Certificate
- [ ] Upload a Private Certificate
- [ ] Upload a Public Certificate

`,
  },
  {
    q: `Question: You need to manage a private certificate in Azure with automated renewal that can also be exported. Which option should you choose?
`,
    a: `- [ ] Free Managed Certificate
- [x] App Service Certificate
- [ ] Upload a Private Certificate
- [ ] Upload a Public Certificate`,
    n: `Answer:App Service Certificate provides automated certificate management, renewal, and export options for private certificates.

`,
  },
  {
    q: `Question: You need to access remote resources in Azure App Service. Which certificate option should you choose?
`,
    a: `- [ ] Use Free Managed Certificate
- [ ] App Service Certificate
- [ ] Private Certificate
- [x] Public Certificate`,
    n: `Answer:Public Certificate is used for accessing remote resources.

`,
  },
  {
    q: `Question: Which of the following steps is necessary to secure a custom domain using a certificate?
`,
    a: `- [x] Upload a private certificate to the App Service, ensuring that it meets all the requirements for private certificates.
- [ ] Upload a private certificate to the App Service, ensuring that it meets all the requirements for public certificates.
- [ ] Upload a public certificate to the App Service, ensuring that it meets all the requirements for private certificates.
- [ ] Upload a public certificate to the App Service, ensuring that it meets all the requirements for public certificates.`,
    n: `Answer:You must upload a private certificate that satisfies all the requirements for a private certificate.

`,
  },
  {
    q: `Question: What is Transient Fault Handling in the context of cloud applications?
`,
    a: `- [ ] A permanent error handling mechanism that requires manual intervention to resolve issues.
- [x] A technique to handle temporary service interruptions by implementing smart retry/back-off logic, possibly using circuit breakers.
- [ ] A security protocol to handle unauthorized access to cloud services.
- [ ] A method for handling user interface glitches in cloud-based applications.`,
    n: `Answer:A technique to handle temporary service interruptions by implementing smart retry/back-off logic, possibly using circuit breakers.

`,
  },
  {
    q: `Question: You are managing a web application hosted on an Azure Web App. The application is expected to experience a significant increase in traffic soon. You are tasked with configuring auto-scaling for the web app. The requirement is to scale out when the CPU usage goes above 85% for a period of 10 minutes and to scale in when the CPU usage drops below 70%. Which two Azure CLI commands would you use to set up the required auto-scaling rules?
`,
    a: `- [x] 'az monitor autoscale rule create -g ResourceGroup --resource WebAppName --autoscale-name AutoScaleName --scale out 1 --condition "Percentage CPU > 85 avg 10m"'
- [ ] 'az webapp autoscale rule create -g ResourceGroup --resource WebAppName --autoscale-name AutoScaleName --scale out 1 --condition "Percentage CPU > 85 avg 10m"'
- [x] 'az monitor autoscale rule create -g ResourceGroup --resource WebAppName --autoscale-name AutoScaleName --scale in 1 --condition "Percentage CPU < 70 avg 10m"'
- [ ] 'az webapp autoscale rule create -g ResourceGroup --resource WebAppName --autoscale-name AutoScaleName --scale in 1 --condition "Percentage CPU < 70 avg 10m"'`,
    n: `Answer:'az monitor autoscale rule create', not 'az webapp autoscale rule create'

`,
  },
  {
    q: `Question: To utilize Application Insights Profiler in an Azure Web App, which configuration must be enabled?
`,
    a: `- [ ] Cross-Origin Resource Sharing (CORS)
- [x] Always On Feature
- [ ] Identity Activation
- [ ] Custom Domain Configuration`,
    n: `Answer:The "Always On" setting is required to enable Application Insights Profiler for an Azure Web App. This setting keeps the app loaded even when there's no incoming traffic, allowing the profiler to collect data effectively.

`,
  },
  {
    q: `Question: Your organization has a web app deployed on Azure using the D1 App Service Plan. You are tasked with setting up the infrastructure to automatically scale when CPU utilization hits 85%, while also keeping costs low. Which of the following actions should you take to meet these objectives?
`,
    a: `- [x] Activate autoscaling for the Web App
- [x] Set up a scaling condition
- [x] Switch the web app to the Standard App Service Plan
- [ ] Upgrade the web app to the Premium App Service Plan
- [x] Create a scaling rule`,
    n: `Answer:The D1 App Service Plan is a Shared Service Plan, which doesn't support autoscaling. Therefore, you would need to switch the web app to the Standard App Service Plan.

`,
  },
  {
    q: `Question: You are an Azure developer responsible for maintaining a web application hosted on Azure App Service. Users are reporting unexpected behavior within the application, and you need to diagnose the issue by capturing errors and trace information from your application code. What should you do?
`,
    a: `- [ ] Configure Azure Monitor to capture telemetry data.
- [ ] Enable the Web Server Logging feature.
- [x] Enable the Application Logging feature.
- [ ] Create resource health alerts.`,
    n: `Answer:Enabling the Application Logging feature allows you to capture application-level events and errors, which is useful for debugging issues within your application code.  
Azure Monitor is more for monitoring performance metrics and not specifically tailored for application-level logging.  
Web Server Logging captures HTTP-level information, not application-level issues.  
Resource health alerts are for monitoring the health of Azure resources, not for application-level debugging.

`,
  },
  {
    q: `Question: Your Azure App Service-hosted web application named 'webapp-prod' is experiencing issues. Users are complaining about receiving HTTP '404' errors when trying to access certain pages. You need to diagnose these issues by capturing detailed information about each HTTP request. What should you do?
`,
    a: `- [ ] Enable Azure Application Insights.
- [ ] Enable the Application Logging feature.
- [x] Enable the Web Server Logging feature.
- [ ] Set up Azure Network Watcher.`,
    n: `Answer:Enabling the Web Server Logging feature captures all HTTP requests and responses, which is useful for diagnosing issues like HTTP 404 errors.  
Azure Application Insights is more focused on application performance monitoring and not specifically tailored for capturing all HTTP requests and responses.  
Application Logging is for capturing application-level events and errors, not HTTP-level information.  
Azure Network Watcher is for monitoring, diagnosing, and viewing metrics for Azure networking resources, not specifically for HTTP-level logging.

Questions: Which of the following won't trigger a restart?
`,
    a: `- [ ] Changes in App Settings
- [ ] Changes in Connection strings
- [ ] Changes in Storage Mounts
- [x] Storage failover`,
    n: `Answer:Storage failover requires app restart or remounting of Azure Storage.

 

`,
  },
  {
    c: "# Application Insights",
    q: `Question: Which of the following availability tests is recommended for authentication tests?
`,
    a: `- [ ] URL ping
- [ ] Standard
- [x] Custom TrackAvailability`,
    n: `Answer:Custom TrackAvailability test is the long term supported solution for multi request or authentication test scenarios.  
The URL ping test is used to test endpoint availability.  
Standard test is similar to the URL ping test, but it includes additional information.

`,
  },
  {
    q: `Question: Which of the following metric collection types provides near real-time querying and alerting on dimensions of metrics, and more responsive dashboards?
`,
    a: `- [ ] Log-based
- [x] Pre-aggregated
- [ ] Azure Service Bus`,
    n: `Answer:Pre-aggregated metrics are stored as a time series and only with key dimensions, which enable near real-time alerting on dimensions of metrics, more responsive dashboards.  
Azure Service Bus is message queueing service.  
Log-based metrics are aggregated at query time and require more processing to produce results.

`,
  },
  {
    q: `Question: Which of the following metrics are pre-aggregated?
`,
    a: `- [ ] Log based metrics
- [x] Standard metrics
- [ ] All metrics
- [ ] Metrics cannot be pre-aggregated
- [ ] Only metrics enabled by the developer`,
    n: `Answer:Standard metrics are pre-aggregated.

`,
  },
  {
    q: `Question: Where is the exception logged?
csharp
try { Save(); }
catch(Exception ex)
{
     var client = new EventSource();
     client.Write(ex.Message);
}

- [ ] Diagnostic trace listener
- [ ] The Trace.aspx page
- [ ] Application Insights
- [x] Event Log`,
    n: `Answer:The exception gets logged to Event Log. The Write method of the EventSource class allows you to log data to the Event Log.

`,
  },
  {
    q: `Question: Where is the exception logged?
csharp
try { Save(); }
catch(Exception ex)
{
     Trace.Error(ex.Message);
}

- [ ] Diagnostic trace listener
- [x] The Trace.aspx page
- [ ] Application Insights
- [ ] Event Log`,
    n: `Answer:The exception gets logged to a diagnostic trace listener. The Trace.Error method allows you to log exceptions to a diagnostic trace listener. Alternatively, you would need to configure tracing for the application.

`,
  },
  {
    q: `Question: Where is the exception logged?
csharp
try { Save(); }
catch(Exception ex)
{
     var client = new TelemetryClient();
     client.TrackException(ex);
}

- [ ] Diagnostic trace listener
- [ ] The Trace.aspx page
- [x] Application Insights
- [ ] Event Log`,
    n: `Answer:The exception gets logged to Application Insights.

`,
  },
  {
    q: `Question: Where in Application Insights does the following code send data to?
csharp
telemetry.TrackEvent("WinGame");

- [ ] Custom Metrics
- [ ] Page Views
- [x] Custom Events
- [ ] Dependency Tracking`,
    n: `Answer:The 'TrackEvent' method is used to log custom events, which can be used to track user interactions or other significant occurrences within the application.

`,
  },
  {
    q: `Question: You have the following code:
csharp
telemetry.TrackTrace("Monitor");

Can you use 'az monitor activity-log' to view it?
`,
    a: `- [ ] Yes
- [x] No`,
    n: `Answer:'az monitor activity-log' _cannot_ display data from Application Insight telemetry.

`,
  },
  {
    q: `Question: Where in Application Insights does the following code send data to?
csharp
telemetry.TrackDependency("Database", "Query", startTime, timer.Elapsed, success);

- [ ] Custom Metrics
- [ ] Page Views
- [ ] Custom Events
- [x] Dependency Tracking`,
    n: `Answer:The 'TrackDependency' method is used to log calls to external dependencies, such as databases, services, or other external resources. This information can be used to monitor the performance and success rate of these calls, helping to identify potential bottlenecks or failures in the system.

`,
  },
  {
    q: `Question: You have a very old Azure function app and you want to integrate it with Application Insights to save informational log data. Which tasks should you perform?
`,
    a: `- [x] Call the 'LogInformation' method of the 'ILogger' class.
- [x] Manually enable Application Insights in the function app.
- [x] Store the name of the instrumentation key in an app setting named 'APPINSIGHTS_INSTRUMENTATIONKEY'.
- [ ] Call the 'TrackEvent' method of the 'TelemetryClient' class.
- [ ] Disable built-in logging in the function app.
- [ ] Add the Azure App Insights into function App using RBAC.
- [ ] Add the function App into Azure App Insights using RBAC.
- [ ] Add Azure App Insights Service Principle Id to the App settings.
- [ ] Store a key named 'APPINSIGHTS_INSTRUMENTATIONKEY' as a secret named applicationinsights in an Azure Key Vault.`,
    n: `Answer:Application Insights may have to be manually enabled for old functions. To send data, you need the key named 'APPINSIGHTS_INSTRUMENTATIONKEY'. 'ILogger' is used to log to Application Insights (not 'TelemetryClient'!).  
Azure function apps use app settings to find the Application Insights key, not secrets from the Key Vault.

`,
  },
  {
    q: `Question: In your organization, you are working on an ASP.NET web application that is hosted on a development server within the company's internal network. Before transitioning the application to the production server, you must gather performance data from various global locations. What action should you take?
`,
    a: `- [x] Implement a URL ping test using Application Insights.
- [ ] Set up HTTP forwarding through an Application Gateway.
- [ ] Establish a VPN connection with a Global Network.
- [ ] Utilize a Load Balancer across diverse availability regions.
- [ ] Enable monitoring of endpoints in a Traffic Manager profile.`,
    n: `Answer:Application Insights provides the ability to monitor, detect, and diagnose performance issues, including those related to geographic locations. A URL ping test specifically allows you to test the responsiveness of a web application from different regions, aligning with the requirement to capture performance metrics from multiple geographies.  
Traffic Manager sets up close endpoints to users to boost performance. Endpoint monitoring checks if these endpoints are working well with a probing agent.

`,
  },
  {
    q: `Question: In Application Insights, what does the Users tool specifically count?
`,
    a: `- [ ] Page views
- [ ] Button clicks
- [x] People using the app
- [ ] User sessions`,
    n: `Answer:The Users tool in Application Insights counts how many people have used the app and its features.

`,
  },
  {
    q: `Question: When session resets?
`,
    a: `- [x] After 30 minutes of inactivity
- [x] After 24 hours of continuous use
- [ ] On application error
- [ ] Never`,
    n: `Answer:In Application Insights, a session is reset after half an hour of user inactivity, or 24 hours of continuous usage.

`,
  },
  {
    q: `Question: Which of the following can be represented as a custom event in Application Insights?
`,
    a: `- [ ] A page view
- [x] A user interaction like a button selection
- [ ] A session reset
- [ ] Both A and B`,
    n: `Answer:Custom events in Application Insights often represent specific occurrences like user interactions such as button selections or task completions.

`,
  },
  {
    q: `Question: In Application Insights, if a single person uses different browsers or machines, how are they counted in the Users tool?
`,
    a: `- [ ] As one user
- [x] As more than one user
- [ ] As an inactive user
- [ ] Not counted`,
    n: `Answer:In Application Insights, a single person using different browsers or machines will be counted as more than one user by the Users tool.

`,
  },
  {
    q: `Question: What tool should you use in Application Insights to monitor page views?
`,
    a: `- [ ] Users tool
- [ ] Sessions tool
- [x] Events tool
- [ ] Custom Events tool`,
    n: `Answer:The Events tool in Application Insights is used to measure how often pages and features are used, including counting when a browser loads a page from your app.

`,
  },
  {
    q: `Question: You're a product manager for an e-commerce site and want to understand the customer journey from browsing products to completing a purchase. Which Azure Insights feature would you use to identify the stages where customers are dropping off?
`,
    a: `- [ ] Users
- [ ] Sessions
- [ ] Events
- [x] Funnels
- [ ] Cohorts
- [ ] Impact
- [ ] Retention`,
    n: `Answer:Funnels are used to track how users move through different stages of a web application. They help identify where users may stop or leave the app, providing insights into effective areas and where improvements are needed.

`,
  },
  {
    q: `Question: As a marketing analyst, you're tasked with determining how website performance and user characteristics are affecting sales conversions on your online store. Which feature in Azure Insights would you utilize to analyze these factors?
`,
    a: `- [ ] Users
- [ ] Sessions
- [ ] Events
- [ ] Funnels
- [ ] Cohorts
- [x] Impact
- [ ] Retention
- [ ] User Flows`,
    n: `Answer:Impact is the feature that helps you understand how different factors, such as load times and user properties, influence conversion rates in various parts of the app. It provides insights into what affects user behavior and conversion.

`,
  },
  {
    q: `Question: You're leading a team that's launching a new feature, and you want to analyze how different segments of users are interacting with it. Which Azure Insights feature would you use to group users based on their interaction with this new feature?
`,
    a: `- [ ] Users
- [ ] Sessions
- [ ] Events
- [ ] Funnels
- [x] Cohorts
- [ ] Impact
- [ ] Retention
- [ ] User Flows`,
    n: `Answer:Cohorts are used to group and analyze sets of users, sessions, events, or operations that have something in common. This feature helps in understanding specific groups or segments within the user base.

`,
  },
  {
    q: `Question: As a community manager for an online gaming platform, you want to understand player loyalty and how often they return to play after specific achievements or failures. Which Azure Insights feature would you employ to track this information?
`,
    a: `- [ ] Users
- [ ] Sessions
- [ ] Events
- [ ] Funnels
- [ ] Cohorts
- [ ] Impact
- [x] Retention
- [ ] User Flows`,
    n: `Answer:Retention is the feature that helps you understand how many users return to your app and how often they engage with specific tasks or goals. It provides insights into user loyalty and repeated engagement with the app.

`,
  },
  {
    q: `Question: You are a digital marketing manager and want to assess the impact of a recent marketing campaign on your website. You need to determine how many people used your application. Which Azure Insights feature would you use to analyze this information?
`,
    a: `- [x] Users
- [ ] Sessions
- [ ] Events
- [ ] Funnels
- [ ] Cohorts
- [ ] Impact
- [ ] Retention
- [ ] User Flows`,
    n: `Answer:Users helps you understand the number of people who have used your application. It provides insights into the demographics and interests of the users, allowing you to assess the reach of your campaign.

`,
  },
  {
    q: `Question: You're a UX designer working on improving the navigation of a content-rich website. You want to understand the paths users take through the site, where they tend to exit, and if there are any repetitive actions that might indicate a usability issue. Which Azure Insights feature would you use to analyze these navigation patterns?
`,
    a: `- [ ] Users
- [ ] Sessions
- [ ] Events
- [ ] Funnels
- [ ] Cohorts
- [ ] Impact
- [ ] Retention
- [x] User Flows`,
    n: `Answer:You would use the "User Flows" feature in Azure Insights to analyze these navigation patterns.

`,
  },
  {
    q: `Question: What is the primary purpose of the connection string in Application Insights?
`,
    a: `- [ ] Authenticates the Application Insights SDK
- [ ] Controls the visual appearance of telemetry data
- [x] Controls where telemetry is sent
- [ ] Encrypts telemetry data for secure transmission`,
    n: `Answer:The connection string in Application Insights is used to define where the telemetry data is sent.  
It doesn't handle authentication, appearance, or encryption of the data.

`,
  },
  {
    q: `Question: As an Azure Developer, you are tasked with integrating Azure Application Insights into a mobile application using the Azure Mobile Apps SDK. Your goal is to collect telemetry data for analyzing user behavior. Which of the following telemetry types should you avoid manually capturing for this purpose?
`,
    a: `- [ ] Exception
- [ ] Events
- [ ] Session Id
- [ ] Trace`,
    n: `Answer:Application Insights already takes care of this for you. Manually capturing it would be redundant and could interfere with the automatically generated Session Ids.

`,
  },
  {
    q: `Question: Your web application must be able to scale on demand. Which Azure Application Insights data model should you use?
`,
    a: `- [x] An Application Insights metric
- [ ] An Application Insights dependency
- [ ] An Application Insights trace
- [ ] An Application Insights event`,
    n: `Answer:You can use Application Insights metrics to scale Web Apps.

`,
  },
  {
    q: `Question: Your ASP.NET application is generating a high volume of telemetry data, causing you to exceed your data quota. You want to reduce the telemetry traffic while maintaining a statistically correct analysis. Which sampling method would you use?
`,
    a: `- [x] Adaptive Sampling
- [ ] Fixed-rate Sampling
- [ ] Ingestion Sampling`,
    n: `Answer:Adaptive sampling automatically adjusts the volume of telemetry sent from the SDK in your ASP.NET application. It is particularly useful for high-volume applications to avoid exceeding data quotas.

`,
  },
  {
    q: `Question: You have a Java application and you need fine-grained control to apply different sampling rates to selected dependencies, requests, and health checks. Which sampling method would you use?
`,
    a: `- [ ] Adaptive Sampling
- [x] Fixed-rate Sampling
- [ ] Ingestion Sampling`,
    n: `Answer:Fixed-rate sampling is available for Java applications and allows you to set the rate yourself. It also supports sampling overrides for fine-grained control over telemetry.

`,
  },
  {
    q: `Question: You have a running application and you want to control the rate of data ingestion without redeploying the application. Which sampling method would you use?
`,
    a: `- [ ] Adaptive Sampling
- [ ] Fixed-rate Sampling
- [x] Ingestion Sampling`,
    n: `Answer:Ingestion sampling happens at the Application Insights service endpoint and allows you to set the sampling rate without redeploying your app. It helps you keep within your monthly quota.

 

`,
  },
  {
    c: "# AZ CLI",
    q: `Question: Create a new resource group in the West US region with name 'MyResourceGroup'
ps
az group # Options here

Answer:
ps
az group create -l westus -n MyResourceGroup


`,
  },
  {
    q: `Question: Delete 'MyResourceGroup' resource group.
ps
az group # Options here

Answer:
ps
az group delete -n MyResourceGroup


`,
  },
  {
    q: `Question: Force delete all the Virtual Machines in 'MyResourceGroup' resource group.
ps
az group # Options here

Answer:
ps
az group delete -n MyResourceGroup --force-deletion-types Microsoft.Compute/virtualMachines


`,
  },
  {
    q: `Question: Check if 'MyResourceGroup' exists.
ps
az group # Options here

Answer:
ps
az group exists -n MyResourceGroup


`,
  },
  {
    q: `Question: List all resource groups located in the West US region.
ps
az group # Options here

Answer:
ps
az group list --query "[?location=='westus']"


`,
  },
  {
    q: `Question: Update 'MyResourceGroup' resource group. Set CostCenter tag to '{"Dept":"IT","Environment":"Test"}'
ps
az group # Options here

Answer:
ps
az group update --resource-group MyResourceGroup --set tags.CostCenter='{"Dept":"IT","Environment":"Test"}'


`,
  },
  {
    q: `Question: Wait until 'MyResourceGroup' resource group is created
ps
az group # Options here

Answer:
ps
az group wait --created  --resource-group MyResourceGroup


`,
  },
  {
    q: `Question: Wait until 'MyResourceGroup' resource group is deleted
ps
az group # Options here

Answer:
ps
az group wait --deleted --resource-group MyResourceGroup


`,
  },
  {
    q: `Question: Create a storage account 'mystorageaccount' in new resource group 'MyResourceGroup' in the West US region with locally redundant storage.
ps
az # Options here

Answer:
ps
az group create -l westus -n MyResourceGroup
az storage account create -n mystorageaccount -g MyResourceGroup -l westus --sku Standard_LRS


`,
  },
  {
    q: `Question: Create a storage account 'mystorageaccount' in new resource group 'MyResourceGroup' in the eastus2euap region with account-scoped encryption key enabled for Table Service.
ps
az # Options here

Answer:
ps
az group create -l eastus2euap -n MyResourceGroup
az storage account create -n mystorageaccount -g MyResourceGroup --kind StorageV2 -l eastus2euap -t Account


`,
  },
  {
    q: `Question: Delete 'mystorageaccount' storage account in 'MySubscription' subscription in 'MyResourceGroup' using a resource ID.
ps
az storage # Options here

Answer:
ps
az storage account delete --ids /subscriptions/MySubscription/resourceGroups/MyResourceGroup/providers/Microsoft.Storage/storageAccounts/MyStorageAccount


`,
  },
  {
    q: `Question: Delete a storage account using 'mystorageaccount' account name and 'MyResourceGroup' resource group.
ps
az storage # Options here

Answer:
ps
az storage account delete -n MyStorageAccount -g MyResourceGroup


`,
  },
  {
    q: `Question: Failover 'mystorageaccount' storage account from resource group 'MyResourceGroup'.
ps
az storage # Options here

Answer:
ps
az storage account failover -n mystorageaccount -g MyResourceGroup


`,
  },
  {
    q: `Question: Failover 'mystorageaccount' storage account from resource group 'MyResourceGroup' without waiting to complete.
ps
az storage # Options here

Answer:
ps
az storage account failover -n mystorageaccount -g MyResourceGroup --no-wait


`,
  },
  {
    q: `Question: Generate a sas token for 'mystorageaccount' account that is valid for queue and table services on Linux.
ps
end='date -u -d "30 minutes" '+%Y-%m-%dT%H:%MZ''
az storage # Options here

Answer:
ps
end='date -u -d "30 minutes" '+%Y-%m-%dT%H:%MZ''
az storage account generate-sas --permissions cdlruwap --account-name MyStorageAccount --services qt --resource-types sco --expiry $end -o tsv


`,
  },
  {
    q: `Question: Generate a sas token for 'mystorageaccount' account that is valid for queue and table services on MacOS.
ps
end='date -v+30M '+%Y-%m-%dT%H:%MZ''
az storage # Options here

Answer:
ps
end='date -v+30M '+%Y-%m-%dT%H:%MZ''
az storage account generate-sas --permissions cdlruwap --account-name MyStorageAccount --services qt --resource-types sco --expiry $end -o tsv


`,
  },
  {
    q: `Question: Generate a shared access signature for 'mystorageaccount' account for resource types container object; permissions: add, create, update, write for all services. Only permit requests made with the HTTPS protocol.
ps
accountKey='00000000'
expiry='2020-01-01'
az storage # Options here

Answer:
ps
accountKey='00000000'
expiry='2020-01-01'
az storage account generate-sas --account-key $accountKey --account-name MyStorageAccount --expiry $expiry --https-only --permissions acuw --resource-types co --services bfqt


`,
  },
  {
    q: `Question: List all storage accounts in 'MyResourceGroup' resource group.
ps
az storage # Options here

Answer:
ps
az storage account list -g MyResourceGroup

 

`,
  },
  {
    c: "# Azure",
    q: `Question: Where can you discover the autoscale settings in Azure subscription?
`,
    a: `- [ ] Azure Portal > Azure Storage > Autoscale
- [x] Azure Portal > Azure Monitor > Autoscale
- [ ] Azure Portal > Resource Groups > Autoscale
- [ ] Azure Portal > Virtual Machines > Autoscale
- [ ] Azure Portal > Azure Functions > Autoscale`,
    n: `Answer:The correct procedure to discover the autoscale settings in your subscription is to open the Azure portal, search for and select Azure Monitor, and then select Autoscale to view all the resources for which autoscale is applicable.

`,
  },
  {
    q: `Question: In Azure, when an application is scaled out to multiple instances, which service can be configured to conduct health checks on these instances and direct traffic only to the healthy ones?
`,
    a: `- [ ] Azure Service Health
- [ ] Load Balancer
- [x] App Service
- [ ] Azure Traffic Manager`,
    n: `Answer:Azure App Service can perform health checks on instances, routing traffic only to healthy ones.

`,
  },
  {
    q: `Question: Which Azure service enables you to create subscriptions to events raised by third-party resources?
`,
    a: `- [ ] Azure Event Hub
- [ ] Azure Service Bus
- [x] Azure Event Grid
- [ ] Azure Notification Hubs`,
    n: `Answer:Event Grid is designed to create subscriptions to events raised by Azure services, third-party resources, and custom topics.  
Event Hub is used for big data streaming and event ingestion, not for subscribing to third-party events.  
Service Bus is a message broker service, not designed for subscribing to third-party events.  
Notification Hubs are used for sending mobile push notifications, not for subscribing to third-party events.

`,
  },
  {
    q: `Question: You are tasked with developing an ASP.Net web application for deployment on Azure Web App service. The application has two critical requirements:
- Manage and save session state data that should be accessible across all ASP.Net web applications.
- Store full HTTP responses for specific operations.
Additionally, the application should support controlled and concurrent access to the session state data for multiple readers and a single writer. Which Azure service is best suited to meet these session state management and HTTP response storage requirements?
`,
    a: `- [ ] Application Request Routing
- [x] Azure Cache for Redis
- [ ] Azure Blob Storage
- [ ] Azure SQL Database
- [ ] Azure Table Storage`,
    n: `Answer:Azure Cache for Redis: This is the ideal solution for both storing session state data and supporting controlled and concurrent access to the same session state data for multiple readers and a single writer. It provides high throughput and low-latency access to data, making it suitable for session state management and storing full HTTP responses.

`,
  },
  {
    q: `Question: What is the level of awesomeness of the services part of the AZ-204 exam?
`,
    a: `- [x] Amazing
- [ ] Good
- [ ] Adequate
- [ ] Meh
- [ ] 3.6
- [ ] I prefer using Google Cloud / AWS / Something else`,
    n: `Answer:This is my F-U to Microsoft for providing insufficient, ad-like information in the Learning Path, while also making the exam needlessly hard. Thanks.

`,
  },
  {
    q: `Question: You need to configure an application performance management (APM) service to collect and monitor the application log data. Which Azure service should you configure?
`,
    a: `- [ ] Azure Monitor
- [ ] Log Analytics
- [x] Application Insights
- [ ] Azure Advisor`,
    n: `Answer:Application Insights is a feature of Azure Monitor that provides extensible application performance management (APM) and monitoring for live web applications. Azure Monitor helps you maximize the availability and performance of applications and services.
 

`,
  },
  {
    c: "# Blob Storage",
    q: `Question: Which of the following types of blobs are used to store virtual hard drive files?
`,
    a: `- [ ] Block blobs
- [ ] Append blobs
- [x] Page blobs`,
    n: `Answer:Page blobs store random access files up to 8 TB in size, and are used to store virtual hard drive (VHD) files and serve as disks for Azure virtual machines.  
Append blobs are optimized for data append operations.  
Block blobs are made up of blocks of data that can be managed individually.

`,
  },
  {
    q: `Question: Which of the following types of storage accounts is recommended for most scenarios using Azure Storage?
`,
    a: `- [x] General-purpose v2
- [ ] General-purpose v1
- [ ] FileStorage`,
    n: `Answer:General-purpose v2 supports blobs, files, queues, and tables. It's recommended for most scenarios using Azure Storage.  
FileStorage: This is recommended for enterprise or high-performance scale applications and won't cover most scenarios.  
General-purpose-v1 is a legacy account type.

`,
  },
  {
    q: `Question: Which access tier is considered to be offline and can't be read or modified?
`,
    a: `- [ ] Cool
- [x] Archive
- [ ] Hot`,
    n: `Answer:Blobs in the archive tier must be rehydrated to either the hot or cool tier before it can be read or modified.

`,
  },
  {
    q: `Question: Which of the following storage account types supports lifecycle policies?
`,
    a: `- [ ] General Purpose v1
- [x] General Purpose v2
- [ ] FileStorage`,
    n: `Answer:Azure Blob storage lifecycle management offers a rich, rule-based policy for General Purpose v2 and Blob storage accounts.  
General Purpose v1 accounts need to be upgraded to v2 before lifecycle policies are supported.

`,
  },
  {
    q: `Question: Which of the following standard HTTP headers are supported for both containers and blobs when setting properties by using REST?
`,
    a: `- [x] Last-Modified
- [ ] Content-Length
- [ ] Origin
- [ ] Cache-Control
- [x] ETag`,
    n: `Answer:Last-Modified and ETag are supported on both containers and blobs.  
Content-Length and Cache-Control are only supported on blobs.

`,
  },
  {
    q: `Question: Which of the following classes of the Azure Storage client library for .NET allows you to manipulate both Azure Storage containers and their blobs?
`,
    a: `- [ ] BlobClient
- [x] BlobContainerClient
- [ ] BlobUriBuilder`,
    n: `Answer:The BlobContainerClient can be used to manipulate both containers and blobs.  
The BlobUriBuilder provides a way to modify the contents of a Uri instance to point to different Azure Storage resources like an account, container, or blob.  
The BlobClient class is limited to manipulating blobs.

`,
  },
  {
    q: `Question: You arrive at work donned in your favorite furry costume and discover a task from your supervisor demanding you take the company's website offline in order to perform some maintenance on it. The website consists of a single '_index.html' file stored in Azure Storage's '$web' container. You promptly set the access level of that specific file to private and consider the job done as you dive into some leisurely Reddit browsing. Just half an hour later, your supervisor storms over to your desk and fires you on the spot. What could be the reason behind this unexpected termination?
`,
    a: `- [ ] Your choice of unconventional office attire: a furry costume (you did nothing wrong).
- [ ] You erred in your task; you were supposed to set the access level of the entire '$web' container to private.
- [ ] To make the site inaccessible to users, you should have set the entire storage account to private.
- [x] You have a fundamental misunderstanding of how things function within Azure Static Site hosting.`,
    n: `Answer:In this situation, to make the static website inaccessible, you need to turn off the Static Website hosting feature from your Azure Storage account. You know nothing...
You actually cannot set the access level of an individual blob (file), but rather the access level is set on the container level. However, even setting the access level of the '$web' container to private wouldn't take the static website offline. This is due to the fact that Azure's static website feature always serves files in the '$web' container anonymously, regardless of the container's access level setting. Same goes for setting the entire storage account to private.

`,
  },
  {
    q: `Question: As an Azure Developer working for a company named Contoso, your task involves managing the company's Azure storage account. The storage account contains numerous block blobs, all of which are tagged with specific metadata indicating the project they are associated with. For instance, some blobs are tagged as "Project: Contoso".
However, due to new privacy regulations, Contoso has decided to delete all blobs tagged with "Project: Contoso" as soon as possible after they have been uploaded to the storage. This is to ensure that sensitive data is not retained longer than necessary.
Your task is to create an Azure Storage lifecycle policy 'DeleteContosoData' (as a JSON definition) to automate this process.
jsonc
// Code here

Answer:
json
{
  "rules": [
    {
      "enabled": true,
      "name": "DeleteContosoData",
      "type": "Lifecycle",
      "definition": {
        "actions": {
          "baseBlob": {
            "delete": {
              "daysAfterModificationGreaterThan": 0
            }
          }
        },
        "filters": {
          "blobIndexMatch": [
            {
              "name": "Project",
              "op": "==",
              "value": "Contoso"
            }
          ],
          "blobTypes": ["blockBlob"]
        }
      }
    }
  ]
}


`,
  },
  {
    q: `Question: How frequently are Azure Storage lifecycle management policy rules evaluated?
`,
    a: `- [ ] Every time a new blob is added or an existing blob is modified.
- [ ] Once every hour.
- [x] Once a day
- [ ] Once a week
- [ ] They are manually triggered by the user (by default)`,
    n: `Answer:Azure Storage lifecycle management policies are evaluated once a day. In practice, this means that the policies are not necessarily applied immediately after a blob satisfies the policy rule.

`,
  },
  {
    q: `Question: As a cloud solutions developer, you're working with an existing codebase that uses Azure's legacy Storage SDK. During a service disruption at the primary data center, you need to configure the Azure Storage client to retry any failed requests on the secondary location using RA-GRS storage.
Which LocationMode option from the 'Microsoft.Azure.Storage.RetryPolicies.LocationMode' class should you use?
`,
    a: `- [ ] LocationMode.PrimaryOnly
- [ ] LocationMode.SecondaryOnly
- [x] LocationMode.PrimaryThenSecondary
- [ ] LocationMode.SecondaryThenPrimary`,
    n: `Answer:'LocationMode.PrimaryThenSecondary' allows requests to first try the primary location and then retry at the secondary location if necessary.  
This option is part of the legacy Azure Storage SDK. In the newer Azure SDKs (like Azure.Storage.Blobs), the handling of retries and failovers has been reworked and made more efficient.

`,
  },
  {
    q: `Question: In the Azure Blob Storage .NET SDK, you want to ensure that you only update a blob if it has not been modified since you last fetched it. Here is the initial code you have:
cs
BlobServiceClient blobServiceClient = new BlobServiceClient(connectionString);
BlobContainerClient containerClient = blobServiceClient.GetBlobContainerClient("mycontainer");
BlobClient blobClient = containerClient.GetBlobClient("myblob");
BlobProperties properties = await blobClient.GetPropertiesAsync();;
// perform the update
BlobUploadOptions options = new BlobUploadOptions
{
    Metadata = new Dictionary<string, string>
    {
        { "key", "value" }
    },
    // Fill in this part
};
await blobClient.UploadAsync(BinaryData.FromString("data"), options);

What should you put in the `, // Fill in this part` section to ensure the blob is only updated if it has not been modified since you last fetched it?`
    n: `Answer:The missing code should be as follows:
cs
Conditions = new BlobRequestConditions { IfMatch = properties.Value.ETag }

The 'IfMatch'  property of the 'BlobRequestConditions'  object can be set to the ETag of the blob. The 'ETag'  is a version identifier for the blob, and it changes whenever the blob is modified. By setting 'IfMatch'  to the 'ETag'  you got when you fetched the blob's properties, you're specifying that the update should only occur if the blob has not been modified since then. If the blob has been modified, its 'ETag'  will have changed, the IfMatch condition will not be met, and the update operation will fail with a '412 Precondition Failed' error. This approach is used to implement optimistic concurrency control, preventing unexpected overwrites due to concurrent modifications.

`,
  },
  {
    q: `Question: GreenTech Energy Solutions specializes in providing real-time energy consumption data to its clients. They store sensor data in Azure Blob Storage and have decided to maintain two copies of each data file in the 'North Europe' and 'South Africa North' Azure regions. New sensor data files are initially uploaded to the 'North Europe' blob storage. What Azure tool and command would you use to ensure both blob containers have completely identical data?
`,
    a: `- [ ] 'Copy-AzStorageBlob'
- [ ] 'az storage blob copy start-batch'
- [x] 'azcopy sync --recursive'
- [ ] 'azcopy copy --recursive`,
    n: `Answer:'azcopy sync --recursive' is the correct choice because it not only copies the blobs but also ensures that both blob containers are in sync. The '--recursive' flag ensures that all subdirectories and their files are also synced.  
'azcopy copy --recursive' will copy the entire content of source container to destination container, which is not an optimal approach.

`,
  },
  {
    q: `Question: Which of the following methods is the most optimal way to copy a blob from one container to another in Azure Blob Storage?
`,
    a: `
- [x] 'await targetBlob.StartCopyFromUriAsync(sourceBlob.Uri);'
- [ ] 'await sourceBlob.StartCopyFromUriAsync(targetBlob.Uri);'
- [ ] 'await sourceBlob.DownloadToAsync(localStream); await targetBlob.UploadAsync(localStream);'
- [ ] 'await targetBlob.DownloadToAsync(localStream); await sourceBlob.UploadAsync(localStream);`,
    n: `Answer:'await targetBlob.StartCopyFromUriAsync(sourceBlob.Uri);'await sourceBlob.DownloadToAsync(localStream); await targetBlob.UploadAsync(localStream);' is inefficient because it requires downloading the blob to local storage and then uploading it, consuming more time and resources.

`,
  },
  {
    q: `Question: A healthcare organization is considering Azure Blob Storage for storing patient records that are rarely accessed but need to be retained for compliance reasons. They are particularly interested in minimizing storage costs. If they need to access a file stored in Azure Blob Archive storage, which of the following are a valid first step they can take?
`,
    a: `- [ ] Reconfigure the storage account
- [x] Change the tier of the blob
- [ ] Rotate the storage account keys
- [x] Copy the blob to another tier
- [ ] Change the access permissions
- [ ] Change the account kind`,
    n: `Answer:Archive blobs cannot be accessed directly. To read the data of an archived blob, you must first either:
- Change its tier to Hot or Cool (this process is known as rehydration).
- Copy the blob to a Hot or Cool tier to access its data without affecting the original blob in Archive storage.

`,
  },
  {
    q: `Question: The organization DataGenix has developed a machine learning model for predictive maintenance of industrial machinery. The model runs periodically and stores the predictive results in Blob storage. Additionally, it stores sensor data from the machinery in a separate container. The predictive results are frequently accessed for immediate action and need to be available within minutes. The sensor data is primarily used for compliance and can be accessed less frequently. What would be the optimal Access tier for storing Predictive Results and Sensor Data?
Options:
- [ ] Predictive Results – Archive access tier, Sensor Data – Cool access tier
- [ ] Predictive Results – Hot access tier, Sensor Data – Archive access tier
- [x] Predictive Results – Cool access tier, Sensor Data – Archive access tier
- [ ] Predictive Results – Hot access tier, Sensor Data – Cool access tier`,
    n: `Answer:"Optimal" means "cost effective". Both Hot and Cool are instantly available, but Cool is most optimal for Predictive Results. Anything needing less than an hour could be put in Cool. Use Hot only if you don't want to keep things (frequent deletion).

`,
  },
  {
    q: `Question: A video streaming company stores large media files, typically 8-9 GB in size, in Azure Blob Storage. These files are infrequently accessed but are preferably needed within an hour when requested for editing. What would be the most cost-effective Access tier for storing these media files, considering the one-hour access time is a preference but not a strict requirement?
`,
    a: `- [ ] Hot access tier
- [ ] Cool access tier
- [ ] Cold access tier
- [x] Archive access tier`,
    n: `Answer:Files up to 10 GB can be rehydrated within an hour on High Priority, but it's not guaranteed.

`,
  },
  {
    q: `Question: Which of the following methods can be used to move blobs from one container to another?
`,
    a: `- [x] Powershell
- [x] AzCopy
- [x] AZ CLI
- [x] .Net SDK
- [x] Azure Portal`,
    n: `Answer:You can use any of these

`,
  },
  {
    q: `Question: You need to retrieve and update the metadata of blobs in an Azure storage account using a .Net library. Which functions would you use:
- [ ] 'GetMetadataAsync' and 'SetMetadataAsync'
- [x] 'GetPropertiesAsync' and 'SetMetadataAsync'
- [ ] 'GetMetadataAsync' and 'SetPropertiesAsync`,
    n: `Answer:Beautiful! [BlobClient](https://learn.mcrosoft.com/en-us/dotnet/api/azure.storage.blobs.blobclient?view=azure-dotnet) doesn't support 'GetMetadataAsync', but it has 'SetMetadataAsync'.

`,
  },
  {
    q: `Question: An intern inadvertently misconfigures an application, bypassing the necessary safety checks, which leads to the deletion of a crucial file. Soft delete is enabled on the Azure storage account where this file is stored. Before the incident, two snapshots — Snapshot A and Snapshot B — had been created for the file. Snapshot A was deleted for optimization before the mishap occurred. As a result of the intern's error, the crucial blob and all its remaining snapshots are deleted. Is it possible to restore Snapshot B?
`,
    a: `- [x] Yes
- [ ] No`,
    n: `Answer:Since soft delete is enabled on the storage account, both the blob and its snapshots, including Snapshot B, are soft-deleted. This means they can be recovered during the retention period specified in the soft delete policy. Therefore, it is possible to restore Snapshot B.

What authentication supported by AzCopy to copy data from public blob into Azure Blob:
- [x] OAuth
- [x] SAS
- [ ] Operation is not permitted`,
    n: `Answer:Azcopy supports both SAS and OAuth authentication for data transfer between two Azure Blobs.

`,
  },
  {
    q: `Question: You're building an ASP.Net Core app to interact with Azure Blob containers using Entra ID and role-based access. What permission should you set for the Azure Storage API?
`,
    a: `
- [ ] 'User.Read'
- [ ] 'User.Write'
- [ ] 'client_id'
- [x] 'user_impersonation'
- [ ] 'Blob.Read'
- [ ] 'Storage.Access'
- [ ] 'AzureAD.Auth'
- [ ] 'Storage Blob Data Contributor'
- [ ] 'Storage Blob Data Reader'
- [ ] 'Storage Account Contributor`,
    n: `Answer:'user_impersonation' allows the application to act as the user, inheriting their roles and permissions for blob access.

`,
  },
  {
    q: `Question: Which of the following accounts are eligable for using ZRS?
`,
    a: `- [x] General purpose v2 account at Standard performace tier
- [x] General purpose v2 account at Premium performace tier
- [ ] General purpose v1 account at Standard performace tier
- [ ] General purpose v1 account at Premium performace tier
- [ ] Blob storage account at Standard performace tier
- [ ] Blob storage account at Premium performace tier`,
    n: `Answer:Only General purpose v2 accounts are eligable for using ZRS

`,
  },
  {
    q: `Question: Which of the following accounts are eligable for using GRS?
`,
    a: `- [x] General purpose v2 account at Standard performace tier
- [ ] General purpose v2 account at Premium performace tier
- [ ] General purpose v1 account at Standard performace tier
- [ ] General purpose v1 account at Premium performace tier
- [ ] Blob storage account at Standard performace tier
- [ ] Blob storage account at Premium performace tier`,
    n: `Answer:Only General purpose v2 accounts at standard tier are eligable for using GRS

 

`,
  },
  {
    c: "# Azure Cache for Redis",
    q: `Question: What is the lowest service tier of Azure Cache for Redis recommended for use in production scenarios?
`,
    a: `- [ ] Basic
- [x] Standard
- [ ] Premium`,
    n: `Answer:The standard tier is the lowest tier that offers replication，which is always recommended for production scenarios.

`,
  },
  {
    q: `Question: Which of the following represents the expire time resolution when applying a time to live (TTL) to a key in Redis?
`,
    a: `- [x] 1-millisecond
- [ ] 10-milliseconds
- [ ] seconds or milliseconds`,
    n: `Answer:The expire time resolution is always 1 millisecond.  
Expirations can be set using seconds or milliseconds precision, but the expire time resolution is always 1 millisecond.

`,
  },
  {
    q: `Question: Your company is developing an ASP.NET web application that requires a simple and fast method to store session state information. The application is not expected to scale, and there's no need for distributed storage. You need to identify the best method to store session state. What should you use?
`,
    a: `- [x] In Memory Cache
- [ ] Sql Server
- [ ] Cosmos DB
- [ ] Cache for Redis at Standard Tier
- [ ] Cache for Redis at Premium Tier`,
    n: `Answer:Simple and fast, suitable for non-scalable applications.

`,
  },
  {
    q: `Question: Your company is developing an ASP.NET web application that requires storing session state information in persistent storage. The application must be scalable, and performance is a concern. Additionally, the solution must support concurrent access to the same session state data and be optimized for use with relational databases. You need to identify the best method to store session state. What should you use?
`,
    a: `- [ ] In Memory Cache
- [x] Sql Server
- [ ] Cosmos DB
- [ ] Cache for Redis at Standard Tier
- [ ] Cache for Redis at Premium Tier`,
    n: `Answer:Sql Server allows for scalability, persistent storage, and can be configured for concurrent access, making it suitable for performance-sensitive applications that use relational databases.  
NOTE: Cosmos DB is theoretically _possible_, but it's more complex to set up, more expensive to run.

`,
  },
  {
    q: `Question: Your company is developing an ASP.NET web application that requires a scalable and fast method to store session state information. The application must handle transient network failures and support concurrent access to the same session state data. Additionally, the solution must be optimized for cost. You need to identify the best method to store session state. What should you use?
`,
    a: `- [ ] In Memory Cache
- [ ] Sql Server
- [ ] Cosmos DB
- [x] Cache for Redis at Standard Tier
- [ ] Cache for Redis at Premium Tier`,
    n: `Answer:Combines simplicity, speed, scalability, supports concurrent access, and is optimized for cost, making it suitable for handling transient network failures.

`,
  },
  {
    q: `Question: Your company is developing an ASP.NET web application that requires a highly scalable, fast, and premium method to store session state information. The application must handle transient network failures, provide advanced features, and support concurrent access to the same session state data. Additionally, the solution must offer higher performance capabilities. You need to identify the best method to store session state. What should you use?
`,
    a: `- [ ] In Memory Cache
- [ ] Sql Server
- [ ] Cosmos DB
- [ ] Cache for Redis at Standard Tier
- [x] Cache for Redis at Premium Tier`,
    n: `Answer:Offers premium features, scalability, speed, supports concurrent access, and provides higher performance capabilities, making it suitable for handling transient network failures.

`,
  },
  {
    q: `Question: After acquiring Twitter, Elon Musk, in a moment of alcohol-induced "inspiration", decides to rename it to **X** and then change it's session storage to be something more "Musk-esque". He wants a solution that not only flaunts his financial prowess but also gives the engineers hell, all while ensuring that his tweets would eventually reach his followers on Mars (when the infrastructure is there). He demands global distribution, concurrent access, and the possible ability to scale beyond Earth's boundaries (internal note from the engineering team: "Nope!"). What decision should he force upon the poor Twitter... errr... _X_ engineers to use for session storage, considering that they could only use currently existing solutions, because making them building something from the ground up would likely cause mass resignations?
`,
    a: `- [ ] In Memory Session State Provider
- [ ] SQL Server Session State Provider
- [ ] Cache for Redis at Premium Tier
- [ ] A Giant Neural Network Powered by Starlink Satellites
- [ ] A Custom-Built Database Using Tesla Batteries
- [x] Azure Cosmos DB
- [ ] A Room Full of Floppy Disks Managed by a Team of Robots`,
    n: `Answer:While the other extravagant options might appeal to Musk's sense of innovation and flair, Cosmos DB is the only realistic solution that currently exists and meets the requirements of global distribution, scalability, and concurrent access, while being totally unsuited for that in terms of cost and complexity (e.g. "Musk-esque").

`,
  },
  {
    q: `Question: Write a code to verify the connection to Azure Cache for Redis:
cs
var connectionString = "[cache-name].redis.cache.windows.net:6380,password=[password-here],ssl=True,abortConnect=False";
// Code here

Answer:
cs
var connectionString = "[cache-name].redis.cache.windows.net:6380,password=[password-here],ssl=True,abortConnect=False";
using (var redisConnection = ConnectionMultiplexer.Connect(connectionString))
{
    var db = redisConnection.GetDatabase();
    db.Execute("PING");
}


`,
  },
  {
    q: `Question: You are developing a .NET application that uses Redis for caching. You need to set a variable named "userData" to the value "JohnDoe123" and ensure that this value expires after one hour. Write down the Redis commands you would use to achieve this.
ps
# Redis here

Answer:
ps
SET userData JohnDoe123
EXPIRE userData 3600


`,
  },
  {
    q: `Question: You are developing a .NET application in C# that uses Redis for caching. You need to set a variable named "userData" to the value "JohnDoe123" and ensure that this value expires after one hour. Write down the C# code using the Redis SDK that you would use to achieve this.
cs
//Code here

Answer:
cs
var connectionString = "[cache-name].redis.cache.windows.net:6380,password=[password-here],ssl=True,abortConnect=False";
using (var redisConnection = ConnectionMultiplexer.Connect(connectionString))
{
    var db = redisConnection.GetDatabase();
    db.StringSet("userData", "JohnDoe123", TimeSpan.FromHours(1));
}


`,
  },
  {
    q: `Question: Given the following code:
redis
SET userData JohnDoe123
EXPIRE userData 60

When will 'userData' expire?
`,
    a: `- [ ] 60ms
- [x] 60s
- [ ] 60h
- [ ] 60 days`,
    n: `Answer:'EXPIRE key seconds [NX | XX | GT | LT]'

`,
  },
  {
    q: `Question: You are a developer for a company that uses Redis for caching user information. Due to security compliance requirements, user data should not be persisted in the cache for more than one minute. If the key already exists, the expiration time should not be updated. Which of the following Redis commands would you use to set the expiration time for a key named userData to one minute and only apply the command if the key does not exist?
`,
    a: `- [ ] EXPIRE userData 60 EX
- [x] EXPIRE userData 60 NX
- [ ] EXPIRE userData 60 XX
- [ ] EXPIRE userData 1 EX
- [ ] EXPIRE userData 1 NX
- [ ] EXPIRE userData 1 XX`,
    n: `Answer:'NX' when key does not exist, 60 seconds

`,
  },
  {
    q: `Question: For your new web application, you're setting up the 'maxmemory' policy directive in Azure Cache for Redis. How can you configure the eviction policy to target the least recently used keys first when the memory limit is met, specifically among the keys with an expiration set? What should be the selected policy for the maxmemory-policy directive?
`,
    a: `- [ ] noeviction
- [ ] allkeys-lru
- [ ] allkeys-lfu
- [x] volatile-lru
- [ ] volatile-lfu
- [ ] allkeys-random
- [ ] volatile-random
- [ ] volatile-ttl`,
    n: `Answer:volatile: if expiration is set; lru - least recently used.

`,
  },
  {
    q: `Question: Which of the following scenarios are suitable for Private Caching?
`,
    a: `- [x] A single-user application that requires rapid access to user-specific data.
- [ ] A distributed system where multiple instances need to access the same view of cached data.
- [x] A desktop application that needs to store temporary files locally for quick retrieval.
- [ ] A large-scale web application that requires a common cache accessible by various servers.
- [x] A personal finance tool that caches individual user's financial data on their device for quick access.
- [ ] A global weather application that needs to provide consistent weather data to users across different regions.`,
    n: `Answer:Private Caching is best suited for scenarios where data is specific to individual instances or users, and speed is a priority. It's simpler but may lead to inconsistencies between different instances.

`,
  },
  {
    q: `Question: Which of the following scenarios are suitable for Shared Caching?
`,
    a: `- [ ] A small mobile app that stores user preferences on the device itself.
- [x] An e-commerce platform where product details are frequently accessed by multiple users and need to be consistent across various servers.
- [x] A content delivery network (CDN) that requires caching of static content across multiple geographical locations.
- [ ] A standalone desktop application that caches user-specific settings locally.
- [x] A multi-player online game where player profiles and scores need to be consistent across different game servers.
- [x] A corporate intranet that needs to cache common resources like logos and templates for consistent branding across different departments.`,
    n: `Answer:Shared Caching is ideal for situations where consistency and scalability are essential, and the data needs to be accessed by multiple instances or applications. It may be more complex to implement and slightly slower to access.

`,
  },
  {
    q: `Question: You are designing a cache for a video editing application where the most recently used video clips are unlikely to be needed again in the short term, while older clips are frequently revisited. What eviction policy would be most suitable?
`,
    a: `- [x] Most-Recently-Used (MRU)
- [ ] First-In-First-Out (FIFO)
- [ ] Explicit Removal`,
    n: `Answer:Since the most recently used clips are less likely to be needed again soon, an MRU policy would be effective in removing them from the cache, allowing older, frequently accessed clips to remain available.

`,
  },
  {
    q: `Question: You are managing a cache for a data processing system that handles tasks in a sequential order, and older tasks are unlikely to be revisited. What eviction policy would be best?
`,
    a: `- [ ] Most-Recently-Used (MRU)
- [x] First-In-First-Out (FIFO)
- [ ] Explicit Removal`,
    n: `Answer:In a system where older data is less likely to be accessed and tasks are handled sequentially, a FIFO policy would be beneficial.

`,
  },
  {
    q: `Question: You are working on a database caching system where certain data must be removed from the cache when specific events occur, such as data modification. What eviction policy would be appropriate?
`,
    a: `- [ ] Most-Recently-Used (MRU)
- [ ] First-In-First-Out (FIFO)
- [x] Explicit Removal`,
    n: `Answer:For a system where data eviction is triggered by specific events, an explicit removal policy would provide the necessary control and accuracy.

`,
  },
  {
    q: `Question: What feature in Azure Cache for Redis links two Premium instances?
`,
    a: `- [ ] Load Balancing
- [x] Geo-replication
- [ ] Sharding
- [ ] Data Partitioning
- [ ] Virtual Network
- [ ] None of the listed`,
    n: `Answer:Geo-replication is the feature that provides a mechanism for linking two Premium tier Azure Cache for Redis instances, allowing data written to the primary cache to be replicated to the secondary linked cache. This functionality can be used to replicate a cache across Azure regions.

`,
  },
  {
    q: `Question: Invalidate "teamsList":
cs
IDatabase cache = Connection.GetDatabase();
// Code here

Answer:
cs
IDatabase cache = Connection.GetDatabase();
cache.KeyDelete("teamsList");


`,
  },
  {
    q: `Question: To enhance performance and ensure data consistency between your data store and cache, under what circumstances would the Cache-Aside pattern be appropriate? Select two correct answers from the options below.
- [ ] When the data to be cached can be completely loaded when the application starts
- [x] When the cache lacks built-in support for read-through and write-through operations
- [x] When the demand for resources is highly variable
- [ ] When you need to cache web session state information across multiple servers`,
    n: `Answer:Cache-Aside pattern is ideal for scenarios where native read-through and write-through operations are not supported by the cache. It also allows for on-demand data loading, making it suitable for situations with fluctuating resource demand.

`,
  },
  {
    q: `Question: You are using Azure Cache for Redis to improve the performance of your web application. Which of the following would you store in Azure Cache for Redis?
`,
    a: `- [ ] HttpContext.Items
- [ ] ViewState
- [x] Session state
- [ ] Application state
- [ ] Query strings
- [ ] Cookies`,
    n: `Answer:Storing session state in Azure Cache for Redis is one of the common patterns / use cases.

 

`,
  },
  {
    c: "# Compute Solutions",
    q: `Question: A startup is developing a complex application with multiple microservices. They want to focus on coding without worrying about the underlying infrastructure. They also need the ability to scale based on traffic and handle background tasks. Which Azure service would be the most suitable for this scenario?
`,
    a: `- [ ] Azure App Service
- [ ] Azure Container Instances
- [ ] Azure Kubernetes Service
- [ ] Azure Functions
- [x] Azure Container Apps`,
    n: `Answer:Azure Container Apps is designed to handle microservices architecture, providing a serverless experience and enabling scaling based on traffic. It's suitable for startups looking to build complex applications without managing the underlying infrastructure.

`,
  },
  {
    q: `Question: You need to deploy a containerized application to Azure and require autoscaling based on custom metrics. Which Azure service would you use?
`,
    a: `- [ ] Azure Container Instances (ACI)
- [x] Azure App Service
- [ ] Azure Container Apps
- [ ] Azure Functions
- [ ] Azure Logic Apps`,
    n: `Answer:Both Azure App Service and Azure Container Apps support autoscaling and allows you to scale based on custom metrics. ACI doesn't offer autoscaling, and Azure Functions and Logic Apps are not primarily container services.

`,
  },
  {
    q: `Question: An e-commerce company is looking to host its web platform, which includes a customer-facing website and internal web APIs. They want a service that integrates well with other Azure services and is tailored for web applications. Which Azure service would you choose?
`,
    a: `- [x] Azure App Service
- [ ] Azure Container Instances
- [ ] Azure Kubernetes Service
- [ ] Azure Functions
- [ ] Azure Container Apps`,
    n: `Answer:Azure App Service is optimized for hosting web applications, including websites and web APIs. Its integration with other Azure services makes it a suitable choice for an e-commerce platform.

`,
  },
  {
    q: `Question: A research team needs to run customized containers for a short-term project. They require a basic and flexible solution without the need for load balancing or automatic scaling. Which Azure service would be the most suitable for this scenario?
`,
    a: `- [ ] Azure App Service
- [ ] Azure Container Apps
- [ ] Azure Kubernetes Service
- [ ] Azure Functions
- [x] Azure Container Instances`,
    n: `Answer:Azure Container Instances provides a straightforward way to run customized containers without additional features like load balancing or automatic scaling. It's ideal for a research project that requires flexibility and simplicity.

`,
  },
  {
    q: `Question: A large enterprise is migrating its applications to containers and requires a robust solution that allows full control over the Kubernetes cluster, including direct access to the Kubernetes API. Which Azure service would you choose?
`,
    a: `- [ ] Azure App Service
- [ ] Azure Container Instances
- [x] Azure Kubernetes Service
- [ ] Azure Functions
- [ ] Azure Container Apps`,
    n: `Answer:Azure Kubernetes Service (AKS) offers a fully managed Kubernetes experience with direct access to the Kubernetes API. It's suitable for large enterprises that need robust container orchestration and full control over the cluster.

`,
  },
  {
    q: `Question: An IoT company is building a data processing system that triggers specific functions based on incoming events from various sensors. They need a solution that can efficiently handle event-driven architecture and execute functions in response to specific triggers. Which Azure service would be the most suitable for this scenario?
`,
    a: `- [ ] Azure App Service
- [ ] Azure Container Instances
- [ ] Azure Kubernetes Service
- [x] Azure Functions
- [ ] Azure Container Apps`,
    n: `Answer:Azure Functions is designed to handle event-driven applications, allowing functions to be triggered by specific events. It's an ideal choice for an IoT company that needs to process data based on incoming sensor events.

 

`,
  },
  {
    c: "# Containers",
    q: `Question: Which of the following methods is recommended when deploying a multi-container group that includes only containers?
`,
    a: `- [ ] Azure Resource Management template
- [x] YAML file
- [ ] 'az container create' command`,
    n: `Answer:Due to the YAML format's more concise nature, a YAML file is recommended when your deployment includes only container instances.  
'az container creates' isn't specific to this scenario.

`,
  },
  {
    q: `Question: Which of the following methods is recommended when deploying a multi-container group that includes containers and additional Azure service resources (for example, an Azure Files share)?
`,
    a: `- [x] Azure Resource Management template
- [ ] YAML file
- [ ] 'az container create' command`,
    n: `Answer:Due to the YAML format's more concise nature, a YAML file is recommended when your deployment includes only container instances.  
'az container create' isn't specific to this scenario.

`,
  },
  {
    q: `Question: Which of the following options is true about the built-in authentication feature in Azure Container Apps?
`,
    a: `- [ ] It can only be configured to restrict access to authenticated users.
- [x] It allows for out-of-the-box authentication with federated identity providers.
- [ ] It requires the use of a specific SDK.`,
    n: `Answer:Azure Container Apps provides built-in authentication and authorization features to secure your external ingress-enabled container app with minimal or no code.  
The built-in authentication feature can be configured to handle authenticated and non-authenticated users.

`,
  },
  {
    q: `Question: What is a revision in Azure Container Apps?
`,
    a: `- [ ] A dynamic snapshot of a container app version.
- [ ] A version of a container app that is actively being used.
- [x] An immutable snapshot of a container app version.`,
    n: `Answer:A revision is an immutable snapshot of a container app version.  
The security container running the authentication and authorization module doesn't run in-process, so no direct integration with a specific language is possible.

`,
  },
  {
    q: `Question: You are tasked with deploying a legacy application written in .NET Framework on Azure. This application's container image is stored in an Azure Container Registry with the address 'myAcrRegistry.azurecr.io/myNetApp:latest'.
You need to ensure that the application is properly isolated and manageable within Azure's infrastructure. To do this, write the necessary PowerShell commands to host this application in a container group named '"myContainerGroup"' using Azure Container Instances (ACI).
ps
# Code here
`,
    n: `Answer:Because the application needs to be isolated, you need to create a new resource group.
Because .Net Framework is specific to Windows only, you'll need '-OsType "Windows"'
ps
# Create a new resource group "myResourceGroup"
New-AzResourceGroup -Name "myResourceGroup" -Location "West US"
# Create a new container group "myContainerGroup"
New-AzContainerGroup -ResourceGroupName "myResourceGroup" -Name "myContainerGroup" -Image "myAcrRegistry.azurecr.io/myNetApp:latest" -OsType "Windows"


`,
  },
  {
    q: `Question: You are planning to deploy a legacy application built using .NET Framework as a containerized solution on Azure. Which operating system type should be specified when creating the Azure Container Group for this application?
`,
    a: `- [ ] Linux only
- [x] Windows only
- [ ] Linux or Windows`,
    n: `Answer:The .NET Framework is Windows-specific, so when creating a container for a .NET Framework application, -OsType "Windows" must be used.

`,
  },
  {
    q: `Question: You are planning to containerize a .NET Core application for deployment on Azure. When creating the Azure Container Group to host this application, which operating system types are viable options?
`,
    a: `- [ ] Linux only
- [ ] Windows only
- [x] Linux or Windows`,
    n: `Answer:As .NET Core is a cross-platform framework, it is capable of running on multiple operating systems, including both Linux and Windows. Therefore, both of these options could be potentially specified when creating the Azure Container Group.

`,
  },
  {
    q: `Question: You are tasked with deploying a .NET Core application on Azure, and you plan to use Azure Container Instances for this purpose. Which PowerShell command should you use to create the necessary resources for hosting this application?
`,
    a: `
- [ ] 'New-AzContainerService'
- [x] 'New-AzContainerGroup'
- [ ] First 'New-AzContainerGroup', then 'New-AzContainerService'
- [ ] Either 'New-AzContainerGroup' or 'New-AzContainerService'
- [ ] None of the mentioned`,
    n: `Answer:Azure Container Instances (ACI) are created and managed using the 'New-AzContainerGroup' cmdlet. The 'New-AzContainerService' cmdlet is used for creating an Azure Kubernetes Service (AKS), which is a different service from ACI.

`,
  },
  {
    q: `Question: Which command is used for creating a container image?
`,
    a: `- [ ] 'az acr create'
- [x] 'az acr build'
- [ ] 'az acr build' then 'az acr create`,
    n: `Answer:'az acr build' is used to create container image  
'az acr create' is used to create Azure Container registry

`,
  },
  {
    q: `Question: You are working with a resource group, 'MultiContainerGroup1', which contains several services such as Azure Functions, a CosmosDB instance, and multiple container instances. You need to export this resource group for future deployment. Write the Azure CLI command to export the template for this resource group.
ps
# Code here
`,
    n: `Answer:You should use a Resource Manager (ARM) template because this format allows the inclusion of multiple Azure services along with the container instances.
ps
az group export --name MultiContainerGroup1 --output-template-file "./MultiContainerGroup1.json"
az deployment group create --resource-group MultiContainerGroup1 --template-file "./MultiContainerGroup1.json"


`,
  },
  {
    q: `Question: You have just deployed several Azure resources within the 'DemoResourceGroup' resource group and you want to capture the template that Azure Resource Manager used for the deployment for future use. How can you accomplish this efficiently?
`,
    a: `- [ ] 'az group export --name DemoResourceGroup'
- [x] 'az group deployment export --name DemoResourceGroup --deployment-name Deployment1'
- [ ] Use the Azure portal to manually inspect and copy the JSON of the deployment template.
- [ ] 'Export-AzResourceGroup -Name DemoResourceGroup`,
    n: `Answer:The 'az group deployment export' command is used to export the template that was used for a specific deployment. This command allows you to capture the exact template used by Azure Resource Manager for that particular deployment.  
Using the Azure portal to manually copy the JSON of the deployment template also is valid way to do it, but is a manual process and inefficient.  
'az group export --name DemoResourceGroup' and 'Export-AzResourceGroup -Name DemoResourceGroup' export the resource group (which may include many deployments)  
is a manual process that doesn't provide the convenience or automation of a CLI command

`,
  },
  {
    q: `Question: What is needed to enable authentication on your Azure Container App?
`,
    a: `- [x] A configured ingress rule with 'allowInsecure' set to disabled
- [x] Any Identity provider
- [x] A specified Authentication / Authorization provider within the app settings
- [ ] A secret key to be embedded in the app's code
- [ ] A Premium Azure service tier subscription
- [ ] An Azure Container App certificate issued by Microsoft
- [ ] Microsoft Entra ID is required as an Identity provider`,
    n: `Answer:Auth works only with HTTPS, requires any identity provider and specified provider within app settings. Authough Entra ID is a valid option, it's incorrect to state it's required.

`,
  },
  {
    q: `Question: You want to store and manage private Docker images that your application will use. Which Azure CLI command would be most appropriate to achieve this?
`,
    a: `- [ ] 'az containerapp create'
- [x] 'az acr create'
- [ ] 'az container create'
- [ ] 'az containerapp up`,
    n: `Answer:'az acr create' - The Azure Container Registry (ACR) service stores and manages private Docker container images. Using the 'az acr create' command creates a new ACR, allowing you to handle and manage your Docker images.

`,
  },
  {
    q: `Question: You have a single-container application that doesn't require advanced orchestration features like scaling or networking with other containers. Which Azure CLI command would be the most suitable for this purpose?
`,
    a: `- [ ] 'az acr create'
- [x] 'az container create'
- [ ] 'az containerapp create'
- [ ] 'az acr build'
- [ ] 'az containerapp up`,
    n: `Answer:'az container create' - Azure Container Instances (ACI) is a service that allows you to run containers directly without the need for any orchestration service. The 'az container create' command is used to create these instances, which are ideal for single, isolated workloads.

`,
  },
  {
    q: `Question: Your team has developed a new microservices-based application, and you need to deploy these services on Azure. Which command allows you to deploy these applications with scaling and orchestration features?
`,
    a: `- [ ] 'az container create'
- [ ] 'az acr create'
- [ ] 'az acr build'
- [x] 'az containerapp create`,
    n: `Answer:'az containerapp create' - Azure Container Apps is a serverless container service that provides advanced features such as scaling and orchestration. The 'az containerapp create' command is used to create a new Azure Container App, which is ideal for deploying microservices.

`,
  },
  {
    q: `Question: In the context of Dapr, what is the purpose of a Dapr sidecar and how does it interact with a container app?
`,
    a: `- [ ] The Dapr sidecar is used to manage the lifecycle of the container app and has no direct interaction with the app itself.
- [x] The Dapr sidecar is used to expose Dapr APIs to the container app, which can be invoked via HTTP or gRPC.
- [ ] The Dapr sidecar is used to provide a user interface for managing the container app and can be accessed via a web browser.
- [ ] The Dapr sidecar is used to store the state of the container app and periodically syncs this state with the app.`,
    n: `Answer:A Dapr sidecar exposes Dapr's APIs to your application, enabling features like service invocation and state management over HTTP or gRPC.  
While Dapr does provide state management capabilities, it's not the sidecar's responsibility to store the state of the container app and periodically sync it.

`,
  },
  {
    q: `Question: What is the default behavior of Dapr-enabled container apps regarding the loading of Dapr components?
`,
    a: `- [ ] They load no components by default.
- [ ] They load only the components specified in the application's configuration.
- [x] They load the full set of deployed components.
- [ ] They load components based on the runtime context.`,
    n: `Answer:They load the full set of deployed components.

`,
  },
  {
    q: `Question: What is the primary function of the "Observability" feature in Dapr?
`,
    a: `- [ ] It provides a user interface for monitoring the state of your application.
- [x] It sends tracing information to an Application Insights backend.
- [ ] It allows you to observe the behavior of other services in your application.
- [ ] It provides a dashboard for visualizing the performance of your application.`,
    n: `Answer:It sends tracing information to an Application Insights backend.

`,
  },
  {
    q: `Question: What is the recommended solution if you need a stable public IP address for your container group, especially considering potential container group restarts?
`,
    a: `- [ ] Use a hardcoded IP address in your container group configuration.
- [ ] Configure a different subnet for your container group.
- [ ] Utilize Azure Load Balancer to manage IP address changes.
- [x] Use Application Gateway to ensure a static public IP address.`,
    n: `Answer:To address the potential IP changes when a container group restarts, it's advisable to use Application Gateway. Application Gateway provides a stable public IP address that remains consistent even if the container group's IP changes due to restarts or other factors.

`,
  },
  {
    q: `Question: If a container group restarts, what will happen to its IP address?
`,
    a: `- [ ] The IP address will always remain the same.
- [ ] The IP address will change to a different subnet.
- [x] The IP address might change.
- [ ] The IP address will change only if a new image is deployed.`,
    n: `Answer:When a container group restarts, there's a possibility that its IP address might change. This uncertainty is due to the dynamic nature of container group deployments. It's important not to rely on hardcoded IP addresses in such scenarios.

`,
  },
  {
    q: `Question: What happens when you update an application secret in Azure Container App?
`,
    a: `- [ ] A new revision is created
- [ ] The application restarts to reflect the updated value
- [x] Nothing happens`,
    n: `Answer:Adding, removing, or changing secrets doesn't generate new revisions. Apps need to be restarted to reflect updates.

`,
  },
  {
    q: `Question: You have deployed a container using the following YAML configuration:
yaml
apiVersion: 2018-10-01
location: eastus
name: securetest
properties:
  containers:
    - name: mycontainer
      properties:
        environmentVariables:
          - name: "EXPOSED"
            value: "my-exposed-value"
          - name: "SECRET"
            secureValue: "my-secret-value"
  osType: Linux
  restartPolicy: Always
tags: null
type: Microsoft.ContainerInstance/containerGroups

You want to retrieve the value of the environment variable "SECRET" using the Azure CLI and execute the following command:
bash
az container show --resource-group myResourceGroup --name securetest --query "properties.containers[0].properties.environmentVariables[?name=='SECRET']"

What should you expect from this command?
`,
    a: `- [ ] The value "my-secret-value" will be displayed.
- [ ] An error will be thrown since the secret value cannot be accessed.
- [x] Only the variable's name "SECRET" will be displayed, not its value.
- [ ] The entire container's properties will be displayed.`,
    n: `Answer:The given YAML configuration demonstrates how to set a secure environment variable named "SECRET" with the 'secureValue' property. When viewing container properties through the Azure portal or Azure CLI, only the secure variable's name is displayed, not its value. Therefore, executing the given command will show the name of the secure variable "SECRET", but not its actual value.

`,
  },
  {
    q: `Question: You have deployed a container using the following YAML configuration:
yaml
apiVersion: 2018-10-01
location: eastus
name: securetest
properties:
  containers:
    - name: mycontainer
    properties:
      image: mcr.microsoft.com/azuredocs/hello-world
      ports:
      - port: 80
      resources:
        requests:
          cpu: 1.0
          memoryInGB: 1.5
  osType: ¯\_(ツ)_/¯
  restartPolicy: Always
tags: null
type: Microsoft.ContainerInstance/containerGroups

What should you use for 'osType'?
`,
    a: `- [ ] AMD64
- [ ] Linux
- [ ] Windows
- [x] Both Linux and Windows will work
- [ ] Neither option will work`,
    n: `Answer:Since this is a single container instance, both Windows and Linux would work. Two or more is for multi-containers, thus Linux only.

`,
  },
  {
    q: `Question: You have declared a connection string to a queue storage account in the '--secrets' parameter of a container app. Now you need to reference this secret in an environment variable when creating a new revision in your container app.
Which of the following commands correctly references the secret 'queue-connection-string' in an environment variable in the Azure CLI?
`,
    a: `
- [x] '--env-vars "ConnectionString=secretref:queue-connection-string"'
- [ ] '--env-vars "ConnectionString=queue-connection-string"'
- [ ] '--env-vars "ConnectionString=$CONNECTION_STRING"'
- [ ] '--env-vars "ConnectionString=$queue-connection-string"`,
    n: `Answer:The correct way to reference a secret in an environment variable in the Azure CLI is to set its value to 'secretref:', followed by the name of the secret.

`,
  },
  {
    q: `Question: You are using the Standard plan of Azure Container Registry, and you've recently noticed an increased delay in the performance of your system. You've been actively using the service for various projects. What could be the possible solutions to address this issue?
`,
    a: `- [ ] Upgrade to a more powerful local machine.
- [ ] Upgrade to the Premium plan.
- [x] Delete unused repositories and tags.
- [ ] Increase the bandwidth of your internet connection.
- [ ] Call Azure support.`,
    n: `Answer:Periodically delete unused repositories and tags to improve performance.

`,
  },
  {
    q: `Question: Which container registry tier has the highest throughput?
`,
    a: `- [ ] Basic
- [ ] Standard
- [x] Premium`,
    n: `Answer:Premium has the highest throughput.

`,
  },
  {
    q: `Question: Given a Dockerfile in your current directory with the following content:
Dockerfile
FROM mcr.microsoft.com/hello-world

You are asked to run an image in Azure from a Container Registry named 'myContainerRegistry008'. The image should be tagged as 'sample/hello-world:v1'.
Assume that the Azure subscription and Azure CLI have already been configured on your local system. However, the necessary resources for running the image, such as the resource group and container registry, have not yet been created.
Considering all these requirements, write down the sequence of Azure CLI commands necessary to successfully run the image from the specified container registry.
Answer:
Dockerfile
# Create a resource group named 'myResourceGroup' in 'eastus' location
az group create --name myResourceGroup --location eastus
# Create an Azure container registry named 'myContainerRegistry008' within the 'myResourceGroup'
az acr create --resource-group myResourceGroup --name myContainerRegistry008 --sku Basic
# Authenticate Docker client to the registry
az acr login --name myContainerRegistry008
# Build the Docker image from the Dockerfile in the current directory, tag it as 'sample/hello-world:v1',
# and push it to the 'myContainerRegistry008' registry
az acr build --registry myContainerRegistry008 --image sample/hello-world:v1 .
# Execute the image from the registry
az acr run --registry myContainerRegistry008 --cmd '$Registry/sample/hello-world:v1' /dev/null


`,
  },
  {
    q: `Question: You are managing an Azure Container Registry named 'myregistry'. You have a task to publish the most recent 'windows/servercore' container image from the Microsoft Container Registry into your registry. After importing, you want the image to be tagged as 'servercore:ltsc2019' in your registry. Write the Azure CLI command that would be needed to accomplish this.
ps
# Code here

Answer:
ps
az acr import \
--name myregistry \ # specifies the name of your Azure Container Registry
--source mcr.microsoft.com/windows/servercore:latest \ # the fully qualified source image reference
--image servercore:ltsc2019 # the new tag you want the image to have in your registry


`,
  },
  {
    q: `Question: Which of the following Azure Container Registry options support geo-replication to manage a single registry across multiple regions?
`,
    a: `- [ ] Basic
- [ ] Standard
- [x] Premium`,
    n: `Answer:The premium tier adds geo-replication as a feature.

`,
  },
  {
    q: `Question: Which Azure container registry tiers benefit from encryption-at-rest?
`,
    a: `- [x] Basic
- [x] Standard
- [x] Premium`,
    n: `Answer:Encryption-at-rest is supported in all three tiers.

`,
  },
  {
    q: `Question: You exceed your Azure Container Registry plan limit, what happens?
`,
    a: `- [x] HTTP 429 error (Too many requests)
- [ ] Have to upgrade tier to continue
- [ ] Services will run slower`,
    n: `Answer:You might experience [throttling](https://learn.microsoft.com/en-us/azure/container-registry/container-registry-skus#throttling)

`,
  },
  {
    q: `Question: If you're developing a Linux-based ASP.NET Core application that is planned to be deployed via Azure Container Instances, and you need to launch it in a geographic region where your company doesn't have an existing resource group, what sequence of Azure CLI commands would you utilize to correctly deploy your application in that target region?
ps
location="West Europe"
resourceGroup="WEurope"
containerGroup="WEuropeGroup"
containerName="AspContainer"
containerImage="mcr.microsoft.com/azuredocs/aci-helloworld"
# Code here

Answer:
ps
location="West Europe"
resourceGroup="WEurope"
containerGroup="WEuropeGroup"
containerName="AspContainer"
containerImage="mcr.microsoft.com/azuredocs/aci-helloworld"
# Create a new resource group in the West Europe region
az group create --name $resourceGroup --location "$location"
# Create a container group (ACI) in the new resource group
az container create --name $containerName --resource-group $resourceGroup --image $containerImage --dns-name-label $containerGroup --location $location


`,
  },
  {
    q: `Question: Suppose you have an ASP.NET Core application running within an Azure Container Instance (ACI) and your monitoring team has a unique container image loaded with their monitoring tools. To ensure compliance, you have been tasked with attaching a "sidecar" container (an auxiliary container that works alongside the main application container) from the same host. However, you must take into account that the solution should be cost-effective and require minimal changes to the current application, keeping the setup simple. What Azure service would you employ to realize this objective?
`,
    a: `- [x] ACI Container Groups
- [ ] Azure Kubernetes Service (AKS)
- [ ] Azure App Services
- [ ] Azure Container Registry
- [ ] Azure Service Fabric`,
    n: `Answer:The most suitable service to accomplish this is Azure Container Instances (ACI) Container Groups. This service allows you to run multiple containers, maintained by different teams, deployed together as a group on the same host. Each deployed container instance will share the resources of the host and are able to communicate which each other (in this case: your application and the monitoring sidecar). This offers an economical solution without the need for significant changes to your existing application, and it aligns with the sidecar container model.  
Azure Kubernetes Service (AKS) allows running multiple containers on the same host, which supports the sidecar pattern. However, it introduces additional complexity and potential cost increases due to the need for managing clusters and implementing scaling features.  
Azure App Services provides a platform for hosting web applications and RESTful APIs, including those in containers. The downside is that it does not natively support the sidecar pattern and can lead to higher costs as the scale of operations increases.  
Azure Container Registry serves as a storage and management solution for container images. It is primarily a storage service and does not provide the functionalities to deploy containers or implement the sidecar pattern.  
Azure Service Fabric is a platform that provides orchestration of microservices and containers, and could technically support the sidecar pattern. However, it requires a deeper understanding of the microservices architecture and might not be the most cost-effective or simple solution for running a single application with a monitoring sidecar.

`,
  },
  {
    q: `Question: As a developer in a startup, you're helping your team transition to Microsoft Azure. Your task is to deploy a containerized API service, 'MyAPI', on Azure from an older Linux workstation. The source code for 'MyAPI' is stored locally in the './src' directory and is also tracked on the GitHub repository 'myuser/myrepo'.
Before deploying, you'll need to create a production environment named 'prod'. The Azure CLI on your workstation should be up-to-date, but given its age and the type of service you're deploying, you're unsure if all necessary tools and extensions are available.
'MyAPI' utilizes services that allow for hosting of RESTful APIs and collection and analysis of telemetry data. So, ensure to configure your Azure account accordingly before deployment. Once your local setup is prepared, deploy 'MyAPI' to a resource group named 'MyResourceGroup' in the 'eastus' region using the 'prod' environment.
Can you draft an Azure CLI script to achieve these tasks?
ps
# Code here

Answer:
ps
# Check the current Azure CLI version on the old Linux workstation, and upgrade if needed
az upgrade
# The nature of the application (a containerized service) hints at the need for the containerapp extension. So, add and upgrade it.
az extension add --name containerapp --upgrade
# It's time to connect to Azure once all the local tasks are completed.
# However, you could technically log in at any time before this.
az login
# Register the necessary providers as the application uses services for hosting APIs and telemetry analysis
az provider register --namespace Microsoft.App
az provider register --namespace Microsoft.OperationalInsights
# Create the 'prod' environment
az containerapp env create --resource-group MyResourceGroup --name prod
# Deploy the API service
az containerapp up \
  --name MyAPI \
  --resource-group MyResourceGroup \
  --location eastus \
  --environment prod \
  --context-path ./src \
  --repo myuser/myrepo

In the context of deploying containerized applications on Azure, the command 'az extension add --name containerapp --upgrade' is essential to interact with Azure Container Apps service. The '--upgrade' flag is used to ensure that you have the latest version of the extension. This is especially critical when your workstation is older, and there's uncertainty regarding the presence and version of the necessary tools and extensions.
The 'az login' command logs you into your Azure account. Although we performed all the local tasks like upgrading the Azure CLI and adding the necessary extension before logging into Azure, technically you could log into Azure at any time. The reason why we log in after performing local tasks is just to make sure that we've done everything we can do locally before initiating a connection to Azure. This could help avoid unnecessary delays or connection timeouts, especially if you're on a slow or unreliable network.
- 'Microsoft.App': This namespace is typically used when your application leverages Azure App Services. Azure App Services provide a platform to host web apps, mobile app back ends, RESTful APIs, or automated business processes. If your application doesn't use any of the services provided by Azure App Service, you may not need to register this provider.
- 'Microsoft.OperationalInsights': This namespace is associated with Azure Log Analytics. If your application uses Azure Monitor Log Analytics to collect and analyze telemetry and other data, you need to register this provider. Log Analytics can provide insights about your applications, infrastructure, and network. If you don't use these services, you might not need this provider.
  Note: Explicit provider registration is not typically necessary for Azure services. It's often handled automatically when you create a resource that belongs to a provider, although there can be exceptions.
The command 'az containerapp env create' is used to create an environment in Azure Container Apps. This command creates an environment under a specific resource group with a given name. An environment is a space where you can deploy container apps. You can have different environments for different stages of your app like development, staging, and production. Each environment can have its own configuration like compute resources, networking settings, etc. For your use case, we've assumed that the prod environment has been already configured as per your production specifications.

`,
  },
  {
    q: `Question: As a DevOps engineer at ABC Industries, you are in charge of deploying a Node.js web service that communicates with a MongoDB database to Microsoft Azure. This service relies on environment variables 'DB_URL' and 'SECRET_TOKEN' for database connection and secure interactions, respectively. The service's Docker image is hosted on Docker Hub under 'abcindustries/ai-service-app'.
For deployment, an Azure Container App should be created under the name 'ai-service-app', located in the 'westus2' region within the 'abc-industries' resource group. The app will run on port 8000 and needs DB_URL and SECRET_TOKEN set to 'mongodb://username:password@dbhost:27017/dbname' and 'sometoken' respectively. The container instance should have suitable CPU and memory specifications.
Considering these requirements, how would you employ Azure CLI to set up this Azure Container App?
ps
# Code here

Answer:
ps
# Log into the Azure account
az login
# Upgrade the Azure CLI to the latest version
az upgrade
# Add and upgrade the containerapp extension
az extension add --name containerapp --upgrade
# Register the necessary providers as the microservice uses services for hosting APIs
az provider register --namespace Microsoft.App
# Create the 'dev' environment
az containerapp env create --resource-group MyResourceGroup --name dev
# Create the container application
az containerapp create \
  --name ai-service-app \
  --resource-group abc-industries \
  --environment-variables DB_URL=mongodb://username:password@dbhost:27017/dbname SECRET_TOKEN=sometoken \
  --docker-image abcindustries/ai-service-app \
  --region westus2 \
  --target-port 8000 \
  --cpu <CPU_CORES> \
  --memory <MEMORY_GB>

'az containerapp create' gives you more control over the configuration and is suitable for setting up a new application or when making changes to an existing application in a production environment.

`,
  },
  {
    q: `Question: What is the recommended strategy in the event of a full region outage?
`,
    a: `- [x] Wait for the region to recover and then manually redeploy all environments and apps.
- [x] Manually deploy to a new region
- [x] Deploy container apps in advance to multiple regions and use Azure Front Door or Azure Traffic Manager to handle incoming requests.
- [ ] Do nothing and hope for the best.`,
    n: `Answer:All actions are recommended strategies.

`,
  },
  {
    q: `Question: What is the requirement for enabling zone redundancy in your Container Apps environment?
`,
    a: `- [x] The environment must include a virtual network (VNET) with an available subnet.
- [ ] The environment must have at least 10 replicas.
- [ ] The environment must be located in a specific region.
- [ ] The environment must have a specific number of applications running.`,
    n: `Answer:The environment must include a virtual network (VNET) with an available subnet.

`,
  },
  {
    q: `Question: How can you maintain the availability of a crucial website hosted on Azure Container Apps, even if a single Azure datacenter goes down, while keeping the solution simple and using the least number of Azure services?
`,
    a: `- [x] Activate zone redundancy in the Container Apps setting.
- [ ] Set up automatic Azure DevOps deployment pipelines to shift to a new region if the primary datacenter fails.
- [ ] Use multiple regions and route requests via Azure Front Door.`,
    n: `Answer:The optimal solution is to activate zone redundancy in the Container Apps setting. This distributes Azure Container Apps replicas across multiple availability zones, ensuring the website stays operational even if a datacenter fails. Using multiple regions and Azure Front Door or setting up automatic Azure DevOps deployment pipelines would either involve additional services or cause temporary downtime, making them less ideal.

`,
  },
  {
    q: `Question: You want to use managed identities in the scaling rules for your container app. Which ones can you use?
`,
    a: `- [ ] System-assigned identities only
- [ ] User-assigned identities only
- [ ] Both
- [x] None`,
    n: `Answer:Using managed identities in scale rules isn't supported.

`,
  },
  {
    q: `Question: What is ACR Tasks?
`,
    a: `- [ ] A tool for managing virtual machines in Azure
- [x] A suite of features within Azure Container Registry for container image building and patching
- [ ] A service for managing Kubernetes clusters
- [ ] A tool for network monitoring in Azure`,
    n: `Answer:ACR Tasks is a suite of features within Azure Container Registry that provides cloud-based container image building and can automate OS and framework patching for Docker containers.

`,
  },
  {
    q: `Question: What is the default platform for building images with ACR Tasks?
`,
    a: `- [ ] Windows/amd64
- [ ] Linux/arm64
- [x] Linux/amd64
- [ ] Linux/arm`,
    n: `Answer:By default, ACR Tasks builds images for the Linux OS and the amd64 architecture.

`,
  },
  {
    q: `Question: The az acr build command in Azure Container Registry is used to build and push a container image to ACR. To which of the following Docker commands is this Azure command equivalent? (Choose two)
- [ ] docker run
- [x] docker build
- [x] docker push
- [ ] docker pull
- [ ] docker compose`,
    n: `Answer:The az acr build command is equivalent to the combination of docker build, which builds the Docker image, and docker push, which pushes the image to a registry.

`,
  },
  {
    q: `Question: What is the default restart policy in Azure Containers?
`,
    a: `- [x] Always
- [ ] On failure
- [ ] Never`,
    n: `Answer:Always restart

`,
  },
  {
    q: `Question: In Azure Container Instances, which restart policy should you choose if you want the containers in the container group to execute only once and not restart?
`,
    a: `- [x] Never
- [ ] OnFailure
- [ ] Always`,
    n: `Answer:'Never' policy ensures that the containers in the container group will not be restarted. It aligns with the requirement of running the containers at most once.

`,
  },
  {
    q: `Question: Which command will set environment variable 'MinLength' to '8'?
`,
    a: `- [x] 'az container create --environment-variables 'MinLength'='8''
- [x] 'az container create --environment-variables 'MinLength=8''
- [x] 'az container create --environment-variables MinLength=8'
- [ ] 'az container create --environment-variables {'MinLength':8}'
- [ ] 'az container create --environment-variable-name 'MinLength' --environment-variable-value 8'
,"n":'Answer:'az container create --environment-variables 'MinLength'='8' 'NumWords'='5' ...
`,
  },
  {
    q: `Question: You are working on a project that requires deploying a containerized application in Azure. The application has two key requirements: It needs to run a process that requires root access, and it must be hosted on a Windows-based operating system. You are considering Azure Container Apps as a hosting option. Which of the following statements is correct regarding the feasibility of using Azure Container Apps for this project?
`,
    a: `- [ ] Azure Container Apps can fulfill both requirements.
- [ ] Azure Container Apps can only fulfill the requirement of running a process that requires root access but not the Windows-based operating system requirement.
- [ ] Azure Container Apps can only fulfill the Windows-based operating system requirement but not the requirement of running a process that requires root access.
- [x] Azure Container Apps cannot fulfill either of the requirements for this project.`,
    n: `Answer:Azure Container Apps can't run privileged containers, and if a process requires root access, it will cause a runtime error. This rules out fulfilling the first requirement. It also only support Linux-based (linux/amd64) container images, which rules out hosting on a Windows-based operating system.

`,
  },
  {
    q: `Question: What will happen if you change 'template.scale.maxReplicas' from 3 to 5?
json
{
  "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "resources": [
    {
      "properties": {
        "template": {
          "scale": {
            "minReplicas": 1,
            "maxReplicas": 3
          }
        }
      }
    }
  ]
}

- [ ] All existing revisions will have max 5 replicas now.
- [ ] A new revision is created. All revisions now have 5 max replicas now.
- [x] A new revision is created with 5 max replicas. All existing revisions remain unchanged.`,
    n: `Answer:Changes made to the 'template' section are revision-scope changes, which triggers a new revision. The changes are limited to the revision in which they're deployed, and don't affect other revisions.

`,
  },
  {
    q: `Question: What will happen if you change 'configuration.ingress.allowInsecure' from 'false' to 'true'?
json
{
  "$schema": "https://schema.management.azure.com/schemas/2015-01-01/deploymentTemplate.json#",
  "contentVersion": "1.0.0.0",
  "resources": [
    {
      "properties": {
        "configuration": {
          "ingress": {
            "external": true,
            "targetPort": 80,
            "allowInsecure": false
          }
        }
      }
    }
  ]
}

- [x] All existing revisions will now allow insecure traffic.
- [ ] A new revision is created. All revisions will now allow insecure traffic.
- [ ] A new revision is created that allows insecure traffic. All existing revisions remain unchanged.`,
    n: `Answer:Changes made to the 'configuration' section are application-scope changes, which does not triggers a new revision, but affects all existing revisions.

`,
  },
  {
    q: `Question: What command should you execute to verify if your image has been successfully pushed to Azure Container Registry?
`,
    a: `- [x] 'az acr repository list'
- [ ] 'docker images'
- [ ] 'az acr show'
- [ ] 'az acr login'
- [ ] 'az acr task list`,
    n: `Answer:'az acr repository list' lists the repositories in the specified Azure Container Registry, allowing you to verify if your image is present.  
'docker images' lists the images available on your local machine, not in the Azure Container Registry.  
'az acr show' retrieves detailed information about the specified container registry, but does not list the images or repositories.  
'az acr task list' lists all the tasks for a specified container registry, which are used for automated container image building.

`,
  },
  {
    q: `Question: Which command is used to deploy an image in Azure Container Instances (ACI)?
`,
    a: `- [ ] 'az container push'
- [x] 'az container create'
- [ ] 'az container export'
- [ ] 'docker build`,
    n: `Answer:'az container create' is the correct command to deploy a container in Azure Container Instances (ACI)  
'az container push' is not a valid Azure CLI command.  
'az container export' exports a container group in yaml format.  
'docker build' builds a Docker image from a Dockerfile, not related to deploying a container.

`,
  },
  {
    q: `Question: You are planning to use Azure Container Registry for your application. Which identity type should you use to ensure both headless authentication and role-based access control (RBAC)?
`,
    a: `- [ ] Individual Entra ID Identity
- [ ] Managed Identity for Azure Resources
- [x] Entra ID Service Principal
- [ ] Admin User`,
    n: `Answer:Service principals are designed for headless authentication and can be assigned specific Azure roles, making them ideal for both requirements.  
Individual Entra ID Identity and Admin User are used for interactive push/pull operations.  
Managed Identity for Azure Resources: While it supports unattended operations, it's limited to select Azure services and may not offer the full range of RBAC options.

`,
  },
  {
    q: `Question: You need to attach the standard output and standard error streams of a running container in Azure to your terminal. Which Azure CLI command should you use?
`,
    a: `- [ ] 'az container logs'
- [ ] 'az container exec'
- [x] 'az container attach'
- [ ] 'az container start`,
    n: `Answer:'az container attach' is used to attach the standard output and standard error streams of a running container to your terminal.  
'az container logs' is used to fetch the logs for a container in a container group.

`,
  },
  {
    q: `Question: You need to mount Azure Files in '/aci/logs/'. Under which property in the YAML file 'mountPath: /mnt/secrets/' will go?
`,
    a: `- [ ] volumes
- [x] volumesMounts`,
    n: `Answer:'volumesMounts' - Where to mount.

`,
  },
  {
    q: `Question: You need to mount Azure Files in '/aci/logs/'. Under which property in the YAML file 'azureFile:' will go?
`,
    a: `- [x] volumes
- [ ] volumesMounts`,
    n: `Answer:'volumes' - What to mount.

Question:
Your organization utilizes an Azure container registry. What is the most restrictive role you should assign to developers so they can upload/publish images to the registry without granting excessive permissions?
`,
    a: `- [ ] 'Owner'
- [ ] 'Contributor'
- [x] 'AcrPush'
- [ ] 'AcrPull`,
    n: `Answer:The 'AcrPush' role allows developers to push images to the Azure container registry while adhering to the principle of least privilege.

`,
  },
  {
    q: `Question: You are using Azure Container Instances (ACI) to run a container that requires access to an Azure File Share. Which of the following is required to mount the Azure File Share to the ACI?
`,
    a: `- [x] Storage Account Key
- [ ] Shared Access Signature (SAS) Token
- [ ] OAuth Token
- [ ] Entra ID Credentials`,
    n: `Answer:To mount an Azure File Share to an Azure Container Instance, you need the Storage Account Key. SAS Tokens, OAuth Tokens, and Entra ID Credentials are not used for this specific operation.

`,
  },
  {
    q: `Question: You have a containerized application that requires automatic updates whenever the image in Azure Container Registry (ACR) is updated. What should you configure?
`,
    a: `- [ ] Azure DevOps Pipeline
- [x] Webhooks
- [ ] Azure Event Hub
- [ ] Azure Event Grid`,
    n: `Answer:Webhooks in Azure Container Registry allow you to trigger actions in response to events like image pushes or pulls, making it suitable for automating updates.

What storage service should you utilize to ensure persistent storage for a new Azure container instance running a SQL Server database within a Docker image?
`,
    a: `- [ ] Azure Table storage
- [ ] Azure Queue storage
- [ ] Azure Blob storage
- [x] Azure Files
Answer:
- Azure Files is the correct choice as it offers SMB protocol support, making it suitable for persistent storage for SQL Server instances in containers.
- Azure Blob storage lacks SMB support needed for SQL Server instances in containers.
- Azure Table storage is for NoSQL data and not suitable for SQL Server persistent storage.
- Azure Queue storage is for message queuing and not for persistent storage.
 

`,
  },
  {
    c: "# Azure CDN",
    q: `Question: Each Azure subscription has default limits on resources needed for an Azure Content Delivery Network. Which of the following resources has subscription limitations that may impact your solution?
`,
    a: `- [ ] Resource group
- [x] CDN profiles
- [ ] Storage account`,
    n: `Answer:The number of CDN profiles that can be created is limited by the type of Azure subscription.  
Resource groups are required by Azure CDN, but they aren't limited by subscription level.  
Storage accounts aren't a resource used in Azure CDNs.

`,
  },
  {
    q: `Question: When publishing a website through Azure CDN, the files on that site are cached until their time-to-live (TTL) expires. What is the default TTL for large file optimizations?
`,
    a: `- [x] One day
- [ ] One week
- [ ] One year`,
    n: `Answer:The default TTL for large file optimizations is one day.  
Generalized web delivery optimizations have a default TTL of one week.  
Media streaming optimizations have a default TTL of one year.

`,
  },
  {
    q: `Question: You are developing a platform that streams educational content to students worldwide. The platform uses a continuous integration and deployment pipeline. Your primary objectives are to guarantee that the platform remains highly accessible and that students receive a steady streaming service. Moreover, you aim to save the content in a location geographically closest to the student. Which Azure service would best fit this requirement?
`,
    a: `- [x] Azure CDN
- [ ] Azure Cache for Redis
- [ ] Azure Blob Storage
- [ ] Azure App Service Plan
- [ ] Azure Virtual Network`,
    n: `Answer:Azure CDN caches content in multiple locations globally, ensuring users access content from the nearest point of presence, which aligns with the requirement of a steady streaming service and storing content close to the user.

`,
  },
  {
    q: `Question: Which products supports asset pre-loading?
`,
    a: `- [x] Premium Verison
- [x] Standard Versizon
- [ ] Standard Microsoft
- [ ] Standard Akamai`,
    n: `Answer:Verizon only

`,
  },
  {
    q: `Question: Which product supports real-time stats and alerts?
`,
    a: `- [x] Premium Verison
- [ ] Standard Versizon
- [ ] Standard Microsoft
- [ ] Standard Akamai`,
    n: `Answer:Premium Verizon only

`,
  },
  {
    q: `Question: Which products supports brotl compression?
`,
    a: `- [ ] Premium Verison
- [ ] Standard Versizon
- [x] Standard Microsoft
- [ ] Standard Akamai`,
    n: `Answer:Standard Microsoft only

`,
  },
  {
    q: `Question: What is the primary difference between versioning and purging in CDN management?
`,
    a: `- [ ] Versioning deletes content; purging updates it.
- [ ] Versioning and purging both clear content from local caches.
- [x] Versioning assigns new URLs for updates; purging removes content from edge servers.
- [ ] Versioning and purging both require deleting the CDN endpoint.`,
    n: `Answer:Versioning assigns new URLs for updates; purging removes content from edge servers.

`,
  },
  {
    q: `Question: Why might you want to purge cached content from all edge nodes in a CDN?
`,
    a: `- [x] To free storage space.
- [x] To update assets that contain incorrect information or update a web application.
- [ ] To create a new CDN endpoint.
- [ ] To rollback to a previous version of the content.`,
    n: `Answer:To update assets that contain incorrect information or update a web application, also frees space.

`,
  },
  {
    q: `Question: What does purging NOT affect in a CDN?
`,
    a: `- [ ] Edge servers.
- [x] Local browser caches.
- [ ] New URLs.
- [ ] Incorrect information.`,
    n: `Answer:Local browser caches.

`,
  },
  {
    q: `Question: If you want to force a downstream client to request the latest version of a file, what can you do?
`,
    a: `- [ ] Purge the edge servers.
- [x] Give the file a unique name every time you update it or use query string caching.
- [ ] Reduce the file's time-to-live (TTL).`,
    n: `Answer:Changing the file's name or using query string caching ensures the client sees it as new content, forcing a request for the latest version.  
Purging edge servers clears CDN caches but may not affect downstream clients.  
Reducing TTL affects edge server caching but may not force downstream clients to request the latest version.

`,
  },
  {
    q: `Question: How can deleting and recreating a CDN endpoint be considered in the context of content management?
`,
    a: `- [ ] It's a method to version the assets.
- [x] It's another way to purge the content, effectively clearing the cached content from edge servers.
- [ ] It forces all local browser caches to update.
- [ ] It increases the file's time-to-live (TTL).`,
    n: `Answer:Deleting and recreating a CDN endpoint is another way to purge the content, effectively clearing the cached content from edge servers. Note that this method may disrupt content delivery and requires reconfiguration of the endpoint, so it's typically used as a last resort or in specific scenarios.

`,
  },
  {
    q: `Question: In Azure CDN, to reset the cache duration of a file cached before a rule change, what action must you take?
`,
    a: `- [ ] Modify the file
- [ ] Delete the file
- [x] Purge the file
- [ ] Archive the file
- [ ] None of the listed`,
    n: `Answer:In Azure CDN, purging a file removes it from the cache, allowing updated caching rules to be applied.  
Deleting refers to removing the file from the origin server, not the cache, and won't reset the cache duration.

`,
  },
  {
    q: `Question: What are the Azure CDN configuration propagation times for Standard (Verizon):
- [ ] Instant
- [ ] Around 1 minute.
- [x] Around 10 minutes.
- [ ] Around 1 hour.`,
    n: `Answer:1 minute is for Standard (Akamai).

`,
  },
  {
    q: `Question: What are the Azure CDN configuration propagation times for Standard (Akamai):
- [ ] Instant
- [x] Around 1 minute.
- [ ] Around 10 minutes.
- [ ] Around 1 hour.`,
    n: `Answer:10 minutes is for Standard (Verizon).

`,
  },
  {
    q: `Question: An Azure developer has configured a web application and also integrated Azure CDN to direct requests to the web application. The requirement is to make sure that requests containing an ID parameter should always be served from a Point of Presence (PoP). Given this requirement, what should be the configuration for the query string setting in the CDN service?
`,
    a: `- [ ] Ignore query strings
- [ ] Use default setting
- [ ] Bypass caching
- [x] Cache every unique URL`,
    n: `Answer:To meet the requirement of caching requests that include an ID parameter, the setting should be 'Cache each distinct URL'. This ensures that each unique URL, including the query string, is cached.

`,
  },
  {
    q: `Question: You are tasked with developing an ASP.Net application for an on-demand video streaming service, which will be hosted on Azure Web App service. You plan to use Azure Content Delivery Network for content delivery. The video content must be purged from the cache after one hour, and videos of different quality levels should be served from the nearest regional Point of Presence (PoP). What caching behavior should you implement?
`,
    a: `- [ ] Default
- [ ] Set if missing
- [ ] Bypass cache
- [x] Override`,
    n: `Answer:In this scenario, to make certain that all video content is removed from the cache after a 60-minute period, the 'Apply custom rules' or 'Override' setting must be selected.

`,
  },
  {
    q: `Question: Click on the following steps in the correct order to explain how Azure CDN works:
- [x] The request is directed to the nearest server location, also known as Point of Presence (POP).
- [x] The file stays in the cache until its time-to-live (TTL) expires.
- [x] The file is then sent to the user from the POP server and stored there for future requests.
- [x] If the file isn’t in the server’s cache, it’s fetched from the origin server.
- [x] A user requests a file using a special URL.
- [x] This cached file can be quickly sent to any other users requesting the same file, providing a faster user experience.
Answer:
1. A user requests a file using a special URL.
1. The request is directed to the nearest server location, also known as Point of Presence (POP).
1. If the file isn’t in the server’s cache, it’s fetched from the origin server.
1. The file is then sent to the user from the POP server and stored there for future requests.
1. This cached file can be quickly sent to any other users requesting the same file, providing a faster user experience.
1. The file stays in the cache until its time-to-live (TTL) expires.

`,
  },
  {
    q: `Question: You have configured an Azure Front Door service to route requests to web applications in the Azure Web App service. A request is made for a 10 MB XML file with Brotli compression, but the file is not being compressed. What could be the reasons for this issue?
`,
    a: `- [x] The XML file exceeds Azure Front Door's file size limit for compression.
- [x] The 'Content-Type' header for the XML file is not set to a type that Azure Front Door is configured to compress.
- [ ] Brotli compression is not enabled in the Azure Front Door settings.
- [x] The origin server where the Azure Web App is hosted is not configured to handle Brotli compression for XML files.
- [x] The file was initially requested without compression settings and got cached.
- [ ] The XML file is encrypted, making it ineligible for compression.
- [ ] Brotli compression does not support XML
- [x] Caching is not enabled.`,
    n: `Answer:File size limit is 1KB to 8MB. Compression only works when caching is enabled.  
The question already states that a request was made for a file "with Brotli compression".`,
  },
];
