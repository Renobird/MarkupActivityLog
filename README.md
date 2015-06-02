# Markup Activity Log

## Page level activity log for ProcessWire CMS
Markup Activity Log is a set of ProcessWire modules that keeps a log of changes made to all core fields for an individual page.

See the [Forum Post](https://processwire.com/talk/topic/9838-module-activity-log/) for details.

## Installation

In ProcessWire 2.4+ go to your Modules menu in the admin, click the "New" tab and type or paste in "MarkupActivityLog" and click "Install".

If you are unable to install using that method, you can also just install the old way by copying the files for this module into /site/modules/MarkupActivityLog/ and clicking "check for new modules" from your Modules screen.

## How to use

### Admin side
1. Install the module
2. Check the config settings, and specify templates that get the Activity Log tab.
3. Make some changes to a page.
4. Check the log.

### API

In a template file where you wish to display the activity log.

``` php
$activity = $modules->get("MarkupActivityLog");
$page = $pages->get("id=12345"); // this page's template must be specified in the module config list or else it throws an error.
echo $activity->render($page, 10); // the 2nd argument is the number is an optional results limit.
```

To log changes made to a page via the API.

``` php
$activity = $modules->get("MarkupActivityLog");
$activity->logChanges($page);

$page->save();
```

Note: The first version of the module generates markup when used on the API side. (see: MarkupActivityLog.inc);
I plan to add the ability to specify a markup file for the next release.