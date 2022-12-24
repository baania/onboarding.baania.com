"use strict";(self.webpackChunkonboarding_baania=self.webpackChunkonboarding_baania||[]).push([[84],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=m(r),p=o,d=f["".concat(l,".").concat(p)]||f[p]||c[p]||n;return r?a.createElement(d,i(i({ref:t},u),{},{components:r})):a.createElement(d,i({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var m=2;m<n;m++)i[m]=r[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3335:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return c}});var a=r(7462),o=r(3366),n=(r(7294),r(3905)),i=["components"],s={title:"Terraform"},l=void 0,m={unversionedId:"docs/misc/terraform",id:"docs/misc/terraform",title:"Terraform",description:"Importers",source:"@site/docs/docs/misc/terraform.md",sourceDirName:"docs/misc",slug:"/docs/misc/terraform",permalink:"/docs/misc/terraform",draft:!1,editUrl:"https://github.com/baania/onboarding.baania.com/edit/master/docs/docs/misc/terraform.md",tags:[],version:"current",frontMatter:{title:"Terraform"},sidebar:"docs",previous:{title:"AWS",permalink:"/docs/misc/aws"},next:{title:"Unix",permalink:"/docs/misc/unix"}},u={},c=[{value:"Importers",id:"importers",level:2},{value:"terraformer",id:"terraformer",level:3},{value:"Tools",id:"tools",level:2},{value:"Linters",id:"linters",level:3},{value:"Recipes",id:"recipes",level:2},{value:"Migrate Terraform remote tfstates",id:"migrate-terraform-remote-tfstates",level:3},{value:"Resources",id:"resources",level:2},{value:"AWS",id:"aws",level:3},{value:"Examples",id:"examples",level:3}],f={toc:c};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,n.kt)("wrapper",(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"importers"},"Importers"),(0,n.kt)("h3",{id:"terraformer"},(0,n.kt)("a",{parentName:"h3",href:"https://github.com/GoogleCloudPlatform/terraformer"},"terraformer")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"# https://github.com/GoogleCloudPlatform/terraformer/blob/master/docs/aws.md\n\nterraformer import aws --resources=api_gateway --connect=true --regions=ap-southeast-1\nterraform state replace-provider -auto-approve registry.terraform.io/-/aws hashicorp/aws\n")),(0,n.kt)("h2",{id:"tools"},"Tools"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/cloudskiff/driftctl"},"driftctl")," - Detect, track and alert on infrastructure drift."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://terragrunt.gruntwork.io/docs/getting-started/quick-start/"},"terragrunt")," - Terragrunt is a thin wrapper that provides extra tools for keeping your configurations DRY, working with multiple Terraform modules, and managing remote state."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/craftvscruft/tfrefactor"},"tfrefactor")," - Automated refactoring for Terraform."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/magodo/tfadd"},"tfadd")," - Generate valid Terraform configuration from state.")),(0,n.kt)("h3",{id:"linters"},"Linters"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/terraform-linters/tflint"},"tflint")," - A Pluggable Terraform Linter."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/aquasecurity/tfsec/"},"tfsec")," - A static analysis security scanner for your Terraform code.")),(0,n.kt)("h2",{id:"recipes"},"Recipes"),(0,n.kt)("h3",{id:"migrate-terraform-remote-tfstates"},"Migrate Terraform remote tfstates"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"terraform state pull > dev.tfstate\nterraform state mv -state-out=dev.tfstate module.lambda.module.your_function module.your_function\nterraform state mv \\\n    -state=dev.tfstate \\\n    -state-out=workspace/dev.tfstate \\\n    aws_iam_role.a \\\n    aws_iam_role.a\nterraform state push dev.tfstate\n")),(0,n.kt)("h2",{id:"resources"},"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://towardsdev.com/how-terraform-works-a-visual-intro-6328cddbe067"},"How Terraform Works: A Visual Intro")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://brendanthompson.com/posts/2021/11/my-terraform-development-workflow"},"My Terraform Development Workflow")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://brendanthompson.com/posts/2021/11/my-terraform-standards"},"My Terraform Standards")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.terraform-best-practices.com/"},"Terraform Best Practices")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://jq1.io/posts/opinion_23/"},"Terraform Opinion #23: Use list of objects over map of maps"))),(0,n.kt)("h3",{id:"aws"},"AWS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.gov/docs/ops/runbook/rotating-iam-users/"},"rotate AWS IAM secrets with terraform"))),(0,n.kt)("h3",{id:"examples"},"Examples"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/alphagov/govuk-infrastructure"},"GOV.UK Infrastructure")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/mozilla/partinfra-terraform"},"partinfra-terraform")," - Terraform configuration for Participation Infrastructure.")))}p.isMDXComponent=!0}}]);