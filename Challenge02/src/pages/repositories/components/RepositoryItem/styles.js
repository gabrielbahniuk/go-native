import { StyleSheet } from 'react-native';
import { general, metrics, colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    ...general.box,
    marginTop: metrics.baseMargin,
  },
  avatarUrl: {
    width: 50,
    height: 50,
  },
  repoTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  repoSubtitle: {
    fontSize: 12,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  info: {
    flexDirection: 'column',
    marginRight: metrics.baseMargin,
    alignItems: 'flex-start',
  },
  infoIcon: {
    color: colors.dark,
  },
  infoText: {
    color: colors.dark,
    fontSize: 12,
    marginLeft: metrics.baseMargin / 2,
  },
});
export default styles;
