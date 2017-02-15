<dl class="MarkupActivityLog">
    <?php foreach ($entries as $entry) { ?>
        <?php if ($entry->date) { ?>
            <dt class="date-stamp"><i class="fa fa-calendar"></i> <?php echo $entry->date; ?></dt>
            <dd class="date-stamp">&nbsp;</dd>
        <?php } ?>
        <dt><i class="fa fa-clock-o"></i> <?php echo $entry->time; ?></dt>
        <dd>
            <ul>
                <li><i class="fa fa-user"></i> <?php echo $entry->user_fields; ?></li>

                <?php foreach ($entry->changes as $change) { ?>
                    <li>
                        <b><?php echo $change->field; ?></b> <?php echo __("Changed "); ?>
                        <?php if ($change->type == 'FieldtypeTextarea') { ?>
                            <a href="<?php echo $config->urls->admin; ?>activity-log-service/<?php echo $change->attrs; ?>" class="view-diff"><?php echo __('View Changes'); ?></a>
                        <?php } else { ?>
                            <?php echo __("from "); ?>
                            <del class='diffmod'><?php echo $change->old; ?></del>
                            <?php echo __("to "); ?>
                            <span class='diffmod'><?php echo $change->new; ?></span>
                        <?php } ?>
                    </li>
                <?php } ?>
            </ul>
        </dd>
    <?php } ?>
</dl>