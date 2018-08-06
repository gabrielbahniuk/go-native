import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.light,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: metrics.baseMargin,
    marginHorizontal: metrics.basePadding,
    paddingVertical: 10,
    borderRadius: metrics.baseRadius,
  },
  filterText: {
    color: colors.regular,
  },

  activeFilterText: {
    color: colors.dark,
    fontWeight: 'bold',
  },
});
export default styles;
