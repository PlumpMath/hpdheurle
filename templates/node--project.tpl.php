<?php
/**
 * @file
 * Returns the HTML for a node.
 *
 * Complete documentation for this file is available online.
 * @see https://drupal.org/node/1728164
 */
?>
<article class="node-<?php print $node->nid; ?> <?php print $classes; ?> clearfix"<?php print $attributes; ?>>

	<div class="project-info-wrapper">
		<div class="project-info">
			<?php print render($content['field_solid_object_image']); ?>

			<?php if ($title): ?>
				<h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
			  <?php endif; ?>

			<?php print render($content['body']); ?>
		</div>
	</div>
	<div class="project-images">
		<?php
		//print_r($node->field_images['und']);


		$items1 = field_get_items('node', $node, 'field_images');
		$items2 = field_get_items('node', $node, 'field_solid_object_image');

		foreach ($items1 as $obj) {
			$output = field_view_value('node', $node, 'field_images', $obj, array(
				'type' => 'image',
				'settings' => array(
				'image_style' => 'bigpicture', //place your image style here
				),
			));
			print '<div class="field-image-item field-item">';
			print render($output);
			print '</div>';
			print  "\n";
		}

		foreach ($items2 as $obj) {
			$output = field_view_value('node', $node, 'field_solid_object_image', $obj, array(
				'type' => 'image',
				'settings' => array(
				'image_style' => 'bigpicture', //place your image style here
				),
			));
			print '<div class="field-solid-object-image-item field-item">';
			print render($output);
			print '</div>';
			print  "\n";
		}
		?>


	</div>

	<?php if ($unpublished): ?>
    <header>
		<mark class="unpublished"><?php print t('Unpublished'); ?></mark>
    </header>
  <?php endif; ?>


</article>
