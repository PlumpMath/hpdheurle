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
  <div class="project-wrapper">
	<div class="project-info-wrapper">
		<div class="project-info">
			<?php print render($content['field_solid_object_image']); ?>

			<?php if ($title): ?>
				<h1 class="page__title title" id="page-title"><?php print $title; ?></h1>
			  <?php endif; ?>

			<?php print render($content['body']); ?>
		</div>
	</div>
	<div class="project-images-wrapper">
        <!-- sometimes tables are the perfect tool for the job. this is that time. -->
		<table class="project-images">
		   <tbody>
 		    <tr>
			<?php
			//print_r($node->field_images['und']);


			$items1 = field_get_items('node', $node, 'field_images');

			if(!empty($items1)) {
				foreach ($items1 as $obj) {
					$output = field_view_value('node', $node, 'field_images', $obj, array(
						'type' => 'image',
						'settings' => array(
						'image_style' => 'bigpicture', //place your image style here
						),
					));
					print '<td class="image">';
					print render($output);
					print '</td>';
					print  "\n";
				}
			}


			if($content['flippy_pager']) {
					global $base_url;
					$next_nid = intval($content['flippy_pager']['#list']['next']['nid']); 
					if($next_nid == 0) {
						$next_nid = intval($content['flippy_pager']['#list']['first']['nid']); 
					}
					$next_path = $base_url . "/" . drupal_get_path_alias("node/" . $next_nid);
					$next_node = node_load($next_nid);
					$next_items = field_get_items('node', $next_node, 'field_solid_object_positive');
					if(!empty($next_items)) {
						foreach ($next_items as $obj) {
							$output = field_view_value('node', $next_node, 'field_solid_object_positive', $obj, array(
							'type' => 'image',
							'settings' => array(
							'image_style' => 'bigpicture', //place your image style here
							),
						));
						print '<td class="solid-next">';
						print '<a href=' . $next_path . '>';
						print render($output);
						print '</a>';
						print '</td>';
						print  "\n";
					}
				}
			}
			?>

		  </tr>
		</tbody>
		</table>
	</div>
  </div>

	<?php if ($unpublished): ?>
    <header>
		<mark class="unpublished"><?php print t('Unpublished'); ?></mark>
    </header>
  <?php endif; ?>


</article>
