/**
 * Unregister core/embed variation blocks.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-variations/
 */
document.addEventListener('DOMContentLoaded', function() {
  [
    'amazon-kindle',
    'animoto',
    'cloudup',
    'crowdsignal',
    'dailymotion',
    'flickr',
    'hulu',
    'imgur',
    'issuu',
    'kickstarter',
    'meetup-com',
    'mixcloud',
    'reddit',
    'reverbnation',
    'screencast',
    'scribd',
    'slideshare',
    'smugmug',
    'speaker-deck',
    'spotify',
    'ted',
    'tiktok',
    'tumblr',
    'videopress',
    'wolfram-cloud',
    'wordpress',
    'wordpress-tv',
  ].forEach(variation => {
    wp.blocks.unregisterBlockVariation('core/embed', variation);
  });
});
