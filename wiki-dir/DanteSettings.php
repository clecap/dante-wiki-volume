<?php

require_once ("DantePolyfill.php");                          // fill in some common functions for Dante and otherwise to keep config file clean from common function definitions.

#require_once ("DanteSettings-development.php");
#require_once ("DanteSettings-production.php");
require_once ("DanteSettings-used.php");

require ("mediawiki-PRIVATE.php");

date_default_timezone_set( $wgLocaltimezone );

// protocol specifiers which are accepted for external links
// adjusted, since we want to have javascript: included for activating scripts
$wgUrlProtocols = [
'bitcoin:', 'ftp://', 'ftps://', 'geo:', 'git://', 'gopher://', 'http://',
'https://', 'irc://', 'ircs://', 'magnet:', 'mailto:', 'matrix:', 'mms://',
'news:', 'nntp://', 'redis://', 'sftp://', 'sip:', 'sips:', 'sms:',
'ssh://', 'svn://', 'tel:', 'telnet://', 'urn:', 'worldwind://', 'xmpp:', 
'javascript:',
'//',
];


$wgEnableUploads         = true;                     // allow uploads
$wgMaxUploadSize         = 100 * 1024 * 1024;        // allow large uploads of up to 100 MB
$wgAllowExternalImages   = true;                     // allow extenal images to be used 
$wgFileExtensions[] = 'svg';                         // add svg to list of permitted file types


$wgJobRunRate = 10;             ## Job queue run rate



// DantePresentations - SubTranslate.php settings
// see https://www.mediawiki.org/wiki/Extension:SubTranslate

// MAIN must allow namespaces or no translation will work
$wgNamespacesWithSubpages[NS_MAIN] = true;

/* if you use DeepL API Free plan */
$wgSubTranslateAPIKey['api-free.deepl.com'] = $DEEPL_API_KEY;
/* if you use DeepL API Pro plan */
// $wgSubTranslateAPIKey['api.deepl.com'] = "<your auth-key here>";

$wgSubTranslateCaching      = true;
$wgSubTranslateCachingTime  = 604800;	/* 60(s) * 60(m) * 24(h) * 7 days */
$wgSubTranslateRobotPolicy  = "noindex,nofollow";




$wgGroupPermissions['*']['edit'] = false;         # No anonymous editing

$wgGroupPermissions['docent']['edit'] = true;    # only used to generate the group docent

$wgGroupPermissions['*']['createaccount'] = false; # currently prevent account creation


$wgEditPageFrameOptions ="SAMEORIGIN";                // required to allow the preview iframe in the edit view to navigate to pages of the same 

$wgLogos = false;
$wgFavicon = "$wgScriptPath/favicon.ico";

# include installations of all skins which we did install here
if ( file_exists('DanteSkinsInstalled.php') ) {include ("DanteSkinsInstalled.php");}

# wfLoadSkin('SkinJson');

wfLoadExtension( 'CategoryTree' );
wfLoadExtension( 'Gadgets' );                    // allows access to CSS and JS resources in MediaWiki namespace
wfLoadExtension ('RandomSelection');             // show a random selection of content (Spruch des Tages)
wfLoadExtension ('LabeledSectionTransclusion');  // allows transclusion of labeled sections of a page
wfLoadExtension ('Poem');                        // adds tag <poem> for better formatting of poems
wfLoadExtension ('Cite');                        // adds tags <ref> and <references /> to add citations to the page
wfLoadExtension ('CiteThisPage');                // adds Special:CiteThisPage and toolbox link to provide citations in Bibtex et al formats to the page
wfLoadExtension ('InputBox');                    // adds <inputbox> for allowing forms, eg create page box
wfLoadextension ('ImageMap');                    // adds <imagemap> tag for HTML clickable image maps 
wfLoadExtension ('Interwiki');                   // adds interwiki link formats
wfLoadExtension ('SyntaxHighlight_GeSHi');       // adds <syntaxhighlight> tag for syntax highlighting
wfLoadExtension ('WikiMarkdown');                // adds <markdown> to include markdown syntax into the wiki

wfLoadExtension ('DynamicPageList3');




## configure drwaio

$wgDrawioEditorBackendUrl=$wgServer.$wgScriptPath. "/external-services/draw-io/drawio-dev/src/main/webapp/index.html";

// index.html";  // http://localhost:8080/experiments/drawio-dev/src/main/webapp/
// TODO:  MUST MAKE THIS MORE FLEXIBLE - THIS IS HARDCODED AND tHIS IS BAD !


###
### Dante Extensions: Configure and Load
###
wfLoadExtension( 'DanteBread' );
wfLoadExtension( 'DanteLinks' );
wfLoadExtension( 'DanteTree' );

$wgGroupPermissions['sysop']['dante-restore'] = true;  // TODO: this should go into the registration function of the extension as a default somehow and not be required here. // NOTE: here: it must be before loading the extension 
$wgGroupPermissions['sysop']['dante-dump'] = true;
$wgGroupPermissions['sysop']['dante-dbrestore'] = true;
$wgGroupPermissions['sysop']['dante-dbdump'] = true;
wfLoadExtension( 'DanteBackup' );


wfLoadExtension( 'DanteSnippets' );


# $wgParserCacheType       = CACHE_DB;

$wgTopDante = new stdClass();  // a generic top level object helper for parsifal and dante, must be defined here, before loading Parsifal


$wgGroupPermissions['sysop']['resetParsifal']=true;

// the sequence of loading should be:  1) Parsifal  2) DantePresentations  3) DanteHideSection  -  this influences the sequence of interaction possibilities in the edit links part of the page
wfLoadExtension( 'Parsifal' );
wfLoadExtension( 'DantePresentations' );
wfLoadExtension ('DanteHideSection');                 // allows to hide/collapse individual sections


## Skins
wfLoadSkin( 'skinny' );
wfLoadSkin( 'DantePresentationSkin' );


# include stuff generated dynamically by scripts
require ("DanteDynamicInstalls.php");




##
## Configuring Extension wikEdDiff
##

$wgWikEdDiffFullDiff = false;             # Show complete un-clipped diff text (false)
$wgWikEdDiffShowBlockMoves = true;        # Enable block move layout with highlighted blocks and marks at their original positions (true)
$wgWikEdDiffCharDiff = true;              # Enable character-refined diff (true)
$wgWikEdDiffRepeatedDiff = true;          // Enable repeated diff to resolve problematic sequences (true)
$wgWikEdDiffRecursiveDiff = true;         // Enable recursive diff to resolve problematic sequences (true)  
$wgWikEdDiffRecursionMax = 10;            # Maximum recursion depth (10)
$wgWikEdDiffUnlinkBlocks = true;          # Reject blocks if they are too short and their words are not unique, prevents fragmentated diffs for very different versions (true)
$wgWikEdDiffUnlinkMax = 5;                # Maximum number of rejection cycles (5)
$wgWikEdDiffBlockMinLength = 3;           # Reject blocks if shorter than this number of real words (3)
$wgWikEdDiffColoredBlocks = false;        # Display blocks in differing colors (rainbow color scheme) (false)
$wgWikEdDiffNoUnicodeSymbols = false;     # Do not use UniCode block move marks (legacy browsers) (false)
$wgWikEdDiffStripTrailingNewline = true;  # Strip trailing newline off of texts (false)
$wgWikEdDiffDebug = false;                # Show debug infos and stats (block, group, and fragment data objects) in debug console (false)
$wgWikEdDiffTimer = false;                # Show timing results in debug console (false)
$wgWikEdDiffUnitTesting = false;          # Run unit tests to prove correct working, display results in debug console (false)



